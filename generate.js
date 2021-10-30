const ejs = require("ejs");
const fs = require("fs");
const moment = require("moment");
const request = require("request");
moment.locale("zh-tw");

const events_url = "https://ccns.kktix.cc/events.json";

// events
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

    ejs.renderFile("./events.ejs", { events: events }, null, (err, html) => {
      // console.log(html);
      fs.writeFileSync("./events.html", html, "utf8");
    });
  } else {
    console.log("Failed to fetch events.");
  }
});

// members
const members = require("./resources/members.json");
ejs.renderFile("./members.ejs", { members: members }, null, (err, html) => {
  // console.log(html);
  fs.writeFileSync("./members.html", html, "utf8");
});

// projects
const projects = require("./resources/projects.json");
ejs.renderFile("./projects.ejs", { projects: projects }, null, (err, html) => {
  //console.log(html);
  fs.writeFileSync("./projects.html", html, "utf8");
});

// timeline
const timeline = require("./resources/timeline.json");
ejs.renderFile("./intro.ejs", { timeline: timeline }, null, (err, html) => {
  // console.log(html);
  fs.writeFileSync("./intro.html", html, "utf8");
});
