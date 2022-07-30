const ejs = require("ejs");
const fs = require("fs");
const moment = require("moment");
const request = require("request");
moment.locale("zh-tw");

const renderPage = (src, dst, resources) => {
  ejs.renderFile(src, resources, null, (err, html) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(html);
    fs.writeFileSync(dst, html, "utf8");
  });
}

// events
const events_url = "https://ccns.kktix.cc/events.json";
const renderEvents = (src, dst) => {
  request.get(events_url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var events = JSON.parse(body);
      var events = events.entry.map((e) => {
        var content = e.content;
        var spl = content.split("\n");
        var time_origin = spl[0].split("：")[1].split("~")[0];
        var place = spl[1].split("：")[1].split("/")[0];

        var time = moment(time_origin, "YYYY/MM/DD HH:mm(Z)").format(
          "YYYY年M月D日 Ah點"
        );

        e.time = time;
        e.place = place;
        return e;
      });
      renderPage(src, dst, { events: events });
    } else {
      console.log("Failed to fetch events.");
    }
  });
};

const members = require("./resources/members.json");
const projects = require("./resources/projects.json");
const timeline = require("./resources/timeline.json");
fs.mkdirSync("./public/frameworks/", { recursive: true })
const pages = [
  { src: "./ejs/events.ejs", dst: "./public/events.html", renderer: renderEvents },
  { src: "./ejs/members.ejs", dst: "./public/members.html", resources: { members: members } },
  { src: "./ejs/projects.ejs", dst: "./public/projects.html", resources: { projects: projects } },
  { src: "./ejs/intro.ejs", dst: "./public/intro.html", resources: { timeline: timeline } },
  { src: "./ejs/env.ejs", dst: "./public/env.html" },
  { src: "./ejs/food.ejs", dst: "./public/food.html" },
  { src: "./ejs/index.ejs", dst: "./public/index.html" },
];

pages.forEach((e, i) => {
  if (e.renderer && e.renderer.call && e.renderer.apply)
    return e.renderer(e.src, e.dst);
  renderPage(e.src, e.dst, e.resources || {});
});

// Run-time config for "live2d-lapp-ccns.js" (unofficially extended CubismWebSamples)
// https://github.com/IepIweidieng/CubismWebSamples
fs.copyFileSync("./resources/c-chan.json", "./public/lappconfig.json");
