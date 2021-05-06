(this.webpackJsonpservices = this.webpackJsonpservices || []).push([
  [0],
  {
    15: function (e, t, a) {
      e.exports = a(34);
    },
    20: function (e, t, a) {},
    21: function (e, t, a) {},
    33: function (e, t, a) {},
    34: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        i = a(1),
        r = a.n(i),
        s = (a(20), a(3)),
        c = a(2),
        l = a.n(c),
        d = (a(21), a(22), a(12)),
        m = a(13);
      var u = function (e) {
          var t = Object(n.useState)(0),
            a = Object(s.a)(t, 2),
            i = a[0],
            r = a[1],
            c = Object(n.useState)(Object(m.v4)()),
            u = Object(s.a)(c, 2),
            h = u[0];
          function b() {
            new l.a(document.getElementById("".concat(h, "title")), { loop: !1, delay: 75 })
              .typeString(e.panelComponent[i].title)
              .pauseFor(1e3)
              .start(),
              new l.a(document.getElementById("".concat(h, "body")), { loop: !1, delay: 75 })
                .typeString(e.panelComponent[i].body)
                .pauseFor(1e3)
                .start();
          }
          return (
            u[1],
            Object(n.useEffect)(function () {
              b();
            }, []),
            Object(n.useEffect)(
              function () {
                b();
              },
              [i]
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "div",
                { className: "box peddapViewer" },
                o.a.createElement(
                  d.Carousel,
                  {
                    onChange: function (e) {
                      r(e);
                    },
                    renderThumbs: function () {
                      return [];
                    },
                  },
                  e.panelComponent.map(function (e) {
                    return o.a.createElement("img", { src: e.media });
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: "box peddapPanel" },
                o.a.createElement("h2", { id: "".concat(h, "title") }),
                o.a.createElement("p", { id: "".concat(h, "body") })
              )
            )
          );
        },
        h = a(14),
        b = a.n(h),
        p =
          (a(33),
          [
            {
              media: "./images/01a05100-1398-478f-8c0f-2ad16aa1edeb.jpeg",
              title: "The universe is my bae.",
              body:
                "Not long ago in a lucid dream, I was embraced by the universe. We spooned, obviously since I'm much smaller I took little spoon (we're just really good friends) but that's beside the point...",
            },
            {
              media: "./images/1bcf0759-285b-4fa7-a960-a4d330e6d400.jpeg",
              title: "Seriously we're just friends.",
              body: "The universe spoke three fundamental directives...",
            },
            {
              media: "./images/76d4de4b-fe0e-4627-9b36-0e5d63876ce7.jpeg",
              title: "I'm not religious or whatever.",
              body:
                "1) Liberate every woman and man from external governing entities by decentralizing energy, food and housing using automation and technological process improvements....",
            },
            {
              media: "./images/aababc0e-c7f6-458b-baa1-53a4c42671b1.jpeg",
              title: "I'm not a psychologist.",
              body:
                "2) Improve the processes in which we perceive our world with innovations in psychological techniques...",
            },
            {
              media: "./images/f96b6df0-9010-47be-87ff-711f8ad758d2.jpeg",
              title: "Evolution baby!",
              body:
                "3) Design a world that is aligned with the individualistic biological reward system of woman and man...",
            },
            {
              media: "./images/fab56e9e-d5f8-47e9-b231-e9baa9ce3299.jpeg",
              title: "What the hell does it mean?",
              body:
                "I woke up with a hangover and was literally covered with hair of the dog since we sleep on the same couch. As for dream interpretation your guess is as good as mine.",
            },
          ]);
      var g = function () {
        return o.a.createElement(
          "div",
          null,
          o.a.createElement("h1", { style: { margin: "0%" } }, "Jackson"),
          o.a.createElement(
            "h1",
            { style: { margin: "0%" } },
            o.a.createElement(b.a, {
              options: { strings: ["Thomas", "Doubting", "Introvert", "Psychopath"], autoStart: !0, loop: !0 },
            })
          ),
          o.a.createElement("h1", { style: { margin: "0%" } }, "Elfers"),
          o.a.createElement(
            "div",
            { style: { float: "left", width: "100%" } },
            o.a.createElement(
              "div",
              { className: "box" },
              o.a.createElement("h2", null, 'The kids used to call me "Doubting Thomas" at Catholic school.'),
              o.a.createElement(
                "p",
                null,
                "When she asks me about my future I say I prefer them over stocks and bonds."
              )
            ),
            o.a.createElement(u, { panelComponent: p })
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      r.a.render(o.a.createElement(o.a.StrictMode, null, o.a.createElement(g, null)), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.8c5d94a7.chunk.js.map
