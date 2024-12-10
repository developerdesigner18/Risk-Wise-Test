export function applyStyles() {
    const elements = document.querySelectorAll(
      '[class*="gap-"], [class*="padding-"], [class*="font-weight-"], [class*="underline-"], [class*="w-"], [class*="h-"]'
    );

    elements.forEach((element) => {
      const classList = Array.from(element.classList);

      classList.forEach((cls) => {
        if (cls.startsWith("gap-top-")) {
          const size = cls.split("-").pop() + "px";
          element.style.marginTop = size;
        }
        if (cls.startsWith("gap-bottom-")) {
          const size = cls.split("-").pop() + "px";
          element.style.marginBottom = size;
        }
        if (cls.startsWith("gap-right-")) {
          const size = cls.split("-").pop() + "px";
          element.style.marginRight = size;
        }
        if (cls.startsWith("gap-left-")) {
          const size = cls.split("-").pop() + "px";
          element.style.marginLeft = size;
        }
        if (cls.startsWith("padding-top-")) {
          const size = cls.split("-").pop() + "px";
          element.style.paddingTop = size;
        }
        if (cls.startsWith("padding-bottom-")) {
          const size = cls.split("-").pop() + "px";
          element.style.paddingBottom = size;
        }
        if (cls.startsWith("padding-right-")) {
          const size = cls.split("-").pop() + "px";
          element.style.paddingRight = size;
        }
        if (cls.startsWith("padding-left-")) {
          const size = cls.split("-").pop() + "px";
          element.style.paddingLeft = size;
        }
        if (cls.startsWith("padding-all-")) {
          const size = cls.split("-").pop() + "px";
          element.style.padding = size;
        }
        if (cls.startsWith("font-weight-")) {
          const weight = cls.split("-").pop();
          element.style.fontWeight = weight;
        }
        if (cls.startsWith("underline-")) {
          const underline = cls.split("-").pop();
          element.style.textDecoration = underline === "yes" ? "underline" : "none";
        }
        if (cls.startsWith("w-")) {
          const size = cls.split("-").pop() + "%";
          element.style.width = size;
        }
        if (cls.startsWith("h-")) {
          const size = cls.split("-").pop() + "%";
          element.style.height = size;
        }
      });
    });
  }