import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://imperialholdings.com.np/wp-content/uploads/2026/01/landscape-view-of-hydroelectric-power-plant-free-photo.jpg"
        subheading="Clean Energy"
        heading="Energy & Power."
      >
        <InvestmentContent 
          title="Hydropower & Renewable Energy"
          description="Sky Touch invests in Nepal's energy security through hydropower, solar, and renewable energy projects. We support initiatives addressing Nepal's power deficit while contributing to carbon reduction and sustainable development goals. Our energy portfolio focuses on projects with strong technical fundamentals and clear pathways to profitability."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Financial Markets"
        heading="Capital Markets."
      >
        <InvestmentContent 
          title="Strategic Public Equity Investments"
          description="We deploy capital in Nepal's capital markets with diversified exposure across banking, hydropower, manufacturing, infrastructure, and insurance sectors. Our market-based investment strategy leverages deep sector analysis and market expertise to identify undervalued opportunities with strong growth potential."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
        subheading="Urban Development"
        heading="Real Estate."
      >
        <InvestmentContent 
          title="Commercial & Residential Properties"
          description="Our real estate investments span commercial properties, residential developments, and mixed-use projects across Nepal's major cities. We focus on locations with strong demographics, economic growth drivers, and infrastructure development, ensuring sustainable value appreciation and rental yields."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
        subheading="Digital Innovation"
        heading="Information Technology."
      >
        <InvestmentContent 
          title="Building the Digital Economy"
          description="We invest in Nepal's technology ecosystem, supporting software companies, digital platforms, and technology infrastructure. Our IT portfolio focuses on companies driving digital transformation across finance, healthcare, education, and e-commerce sectors."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
        subheading="Tourism Excellence"
        heading="Tourism & Hospitality."
      >
        <InvestmentContent 
          title="World-Class Tourism Infrastructure"
          description="We invest in hotels, resorts, cable cars, and tourism infrastructure across Nepal, from Kathmandu Valley to Pokhara and beyond. Our hospitality investments capitalize on Nepal's growing tourism industry and the global interest in adventure travel and cultural experiences."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80"
        subheading="Healthcare Access"
        heading="Healthcare."
      >
        <InvestmentContent 
          title="Quality Medical Services"
          description="We support Nepal's healthcare infrastructure through hospitals, diagnostic centers, and specialized medical facilities. Our healthcare investments address Nepal's growing demand for quality medical services while creating employment and improving overall health outcomes across the nation."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
        subheading="Agricultural Innovation"
        heading="Agriculture."
      >
        <InvestmentContent 
          title="Transforming Rural Economy"
          description="We invest in agro-processing, food production, and sustainable farming initiatives that transform Nepal's agricultural sector. Our focus is on modernizing farming practices, adding value through processing, and connecting farmers to markets while promoting environmental sustainability."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const InvestmentContent = ({ title, description }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl leading-relaxed">
        {description}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
