import { useEffect } from "react";

export default function HeroSection() {
  // Load FlippingBook script once when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=370782784";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=860738828";
    script2.async = true;
    script2.defer = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=860277707";
    script3.async = true;
    script3.defer = true;
    document.body.appendChild(script3);
  }, []);

  return (
    <section className="w-full py-15 bg-white flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
        Learn Kolams Step-by-Step
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        Illustrated tutorials for traditional & modern kolams
      </p>

      {/* 3-Column Book Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {/* BOOK 1 */}
        <div className="shadow-lg p-4 rounded-xl bg-white">
          <a
            href="https://online.flippingbook.com/view/370782784/"
            className="fbo-embed"
            data-fbo-id="2dd3fa716e"
            data-fbo-ratio="3:2"
            data-fbo-lightbox="yes"
            data-fbo-width="100%"
            data-fbo-height="auto"
            data-fbo-version="1"
            style={{ maxWidth: "100%" }}
          >
            Rangoli Book
          </a>
        </div>

        {/* BOOK 2 */}
        <div className="shadow-lg p-4 rounded-xl bg-white">
          <a
            href="https://online.flippingbook.com/view/860738828/"
            className="fbo-embed"
            data-fbo-id="a556329ed5"
            data-fbo-ratio="3:2"
            data-fbo-lightbox="yes"
            data-fbo-width="100%"
            data-fbo-height="auto"
            data-fbo-version="1"
            style={{ maxWidth: "100%" }}
          >
            Rangoli Book
          </a>
        </div>

        {/* BOOK 3 */}
        <div className="shadow-lg p-4 rounded-xl bg-white">
          <a
            href="https://online.flippingbook.com/view/860277707/"
            className="fbo-embed"
            data-fbo-id="519fc89674"
            data-fbo-ratio="3:2"
            data-fbo-lightbox="yes"
            data-fbo-width="100%"
            data-fbo-height="auto"
            data-fbo-version="1"
            style={{ maxWidth: "100%" }}
          >
            Rangoli Book
          </a>
        </div>
      </div>
    </section>
  );
}
