import { mountBackgrounds } from "./background";
import gsap from "gsap";
export function mountExperience(root) {
  const disposeBackgrounds = mountBackgrounds(root);
  const abort = new AbortController(),
    signal = abort.signal;
  const videos = [...root.querySelectorAll("video")];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.target.tagName === "VIDEO") {
          if (entry.isIntersecting && entry.target.muted)
            entry.target.play().catch(() => {});
          else entry.target.pause();
        } else if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { opacity: 0.35, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "opacity,transform",
            },
          );
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "100px", threshold: 0.05 },
  );
  videos.forEach((v) => {
    v.preload = "metadata";
    observer.observe(v);
  });
  root
    .querySelectorAll(".section-introduction,.logo-grid-wrapper")
    .forEach((el) => observer.observe(el));
  function submit(form) {
    if (!form.reportValidity()) return;
    let status = form.querySelector("[role=status]");
    if (!status) {
      status = document.createElement("p");
      status.role = "status";
      status.className = "local-form-status";
      form.append(status);
    }
    status.textContent =
      "Thank you. Your demo request has been received. No message was sent.";
    form
      .querySelectorAll("button[type=submit],input[type=submit]")
      .forEach((b) => (b.disabled = true));
  }
  root.querySelectorAll("form").forEach((form) => {
    if (form.closest(".roi-calculator,.grader")) return;
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        submit(form);
      },
      { signal },
    );
  });
  root.querySelectorAll(".features-steps").forEach((section) => {
    const items = [...section.querySelectorAll(".scroll-item")],
      images = [...section.querySelectorAll(".images>.image")],
      buttons = [...section.querySelectorAll(".buttons button")];
    let current = 0;
    function select(i) {
      current = Math.max(0, Math.min(items.length - 1, i));
      section
        .querySelector(".inner")
        ?.style.setProperty("--current-item", current);
      items.forEach((el, n) => el.classList.toggle("show", n === current));
      images.forEach((el, n) => {
        el.classList.toggle("is-visible", n === current);
        el.querySelector("video")
          ?.[n === current ? "play" : "pause"]()
          ?.catch?.(() => {});
      });
      section
        .querySelectorAll(".counter__mobile")
        .forEach((el, n) => el.classList.toggle("show", n === current));
      section
        .querySelectorAll(".digit-stack")
        .forEach(
          (el, n) =>
            (el.style.transform = `translateY(-${n ? (current + 1) * 10 : 0}%)`),
        );
      buttons.forEach(
        (b, n) =>
          (b.disabled = n === 0 ? current === 0 : current === items.length - 1),
      );
    }
    buttons.forEach((b, i) =>
      b.addEventListener("click", () => select(current + (i ? 1 : -1)), {
        signal,
      }),
    );
    items.forEach((el, i) =>
      el.addEventListener("click", () => select(i), { signal }),
    );
  });
  root
    .querySelectorAll(
      ".features-carousel-expandable:not(.local-native-features),.features-carousel,.resources-section,.resources-section-carousel",
    )
    .forEach((section) => {
      const track = section.querySelector(
        ".carousel__wrapper,.swiper-wrapper,.cards",
      );
      if (!track) return;
      const cards = [...track.children];
      const buttons = [...section.querySelectorAll(".nav-button")],
        tabs = [...section.querySelectorAll(".tabs .tab")];
      let current = 0;
      track.classList.add("local-carousel-track");
      function select(index) {
        current = Math.max(0, Math.min(cards.length - 1, index));
        track.scrollTo({
          left: cards[current].offsetLeft - track.offsetLeft,
          behavior: "smooth",
        });
        tabs.forEach((t, i) => {
          t.classList.toggle("is-active", i === current);
          t.setAttribute("aria-pressed", String(i === current));
        });
        buttons.forEach(
          (b) =>
            (b.disabled = b.classList.contains("right")
              ? current === cards.length - 1
              : current === 0),
        );
      }
      buttons.forEach((b) =>
        b.addEventListener(
          "click",
          () => select(current + (b.classList.contains("right") ? 1 : -1)),
          { signal },
        ),
      );
      tabs.forEach((t, i) =>
        t.addEventListener("click", () => select(i), { signal }),
      );
    });
  root.querySelectorAll(".contact-ways-card-chat").forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        let dialog = root.querySelector(".local-chat");
        if (dialog) return;
        dialog = document.createElement("dialog");
        dialog.className = "local-chat";
        dialog.innerHTML =
          '<button aria-label="Close chat" class="local-chat-close">×</button><h2>Chat with CV</h2><p>Ask about Terminal’s yard technology.</p><form><label>Your message<input required placeholder="How does Terminal work?" /></label><button>Send</button></form><p role="status"></p>';
        root.append(dialog);
        dialog.showModal();
        dialog.querySelector("button").onclick = () => dialog.remove();
        dialog.querySelector("form").onsubmit = (e) => {
          e.preventDefault();
          dialog.querySelector("[role=status]").textContent =
            "Demo assistant: Terminal connects gate, yard, and dock operations with computer vision. Explore the System menu to learn more. Your message stays in this browser.";
        };
      },
      { signal },
    ),
  );
  return () => {
    abort.abort();
    disposeBackgrounds();
    observer.disconnect();
    videos.forEach((v) => v.pause());
    gsap.killTweensOf(root.querySelectorAll("*"));
    root.querySelector(".local-chat")?.remove();
  };
}
