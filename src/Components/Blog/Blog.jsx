import React from "react";
import GridDesign from "../../utils/Grid/GridDesign";
import redis_go from "../../assets/redis-go.avif";
import OTA from "../../assets/OTA.avif";
import RNdepth from '../../assets/RNdepth.png'
import RNMap from '../../assets/RNMAP.png'

function Blog() {
  const BlogContents = [
    {
      title:
        "Beginner's Guide: Implementing Redis Caching in Golang on Windows",
      link: "https://dev.to/arijit_das_24c46c6f02b06b/how-to-implement-redis-caching-in-golang-for-beginners-a-step-by-step-guidewindows-edition-1g1a",
      image: redis_go,
      content:
        "In this post, I'll walk you through how to set up and use Redis caching in a Golang project. This setup helps in reducing database queries and improving performance by caching frequently requested data.",
    },
    {
      title:
        "Building Your Own OTA Update System for React Native (Post App Center Era)",
      link: "https://dev.to/arijit_das_24c46c6f02b06b/building-your-own-ota-update-system-for-react-native-post-app-center-era-5hll",
      image: OTA,
      content:
        "With Microsoft officially shutting down App Center, many developers like me were left looking for alternatives for pushing Over-The-Air (OTA) updates in React Native",
    },
      {
      title:
        "Understanding React Native Internals ",
      link: "https://dev.to/arijit_das_24c46c6f02b06b/i-used-ai-to-learn-react-native-deeply-so-you-dont-have-to-4jpo",
      image: RNdepth,
      content:
        "Ever wondered how React Native truly works under the hood? We're breaking down the magic that connects your JavaScript to native performance.",
    },
    {
      title:
        "Google Maps Integration in React Native: Complete Guide",
      link: "https://dev.to/asyncarijit/stop-struggling-with-maps-in-react-native-heres-the-complete-guide-28ii",
      image: RNMap,
      content:
        "☕ How I Actually Got Google Maps Working in React Native.",
    },
    // {
    //   title:
    //     "The Future of Cross-Platform Apps: Flutter’s Role in 2024 and Beyond",
    //   link: "link2",
    //   image: avatar,
    //   content:
    //     "Cross-platform app development has become a buzzword in the tech world, and for a good reason. With businesses needing to target multiple devices and platforms, frameworks like Flutter are transforming the way developers approach software projects. As we move into 2024, Flutter’s importance continues to grow, promising new opportunities for developers and enterprises alike. So, what does the future hold for Flutter? And why should businesses keep an eye on it?",
    // },
    // {
    //   title:
    //     "The Future of Cross-Platform Apps: Flutter’s Role in 2024 and Beyond",
    //   link: "link2",
    //   image: avatar,
    //   content:
    //     "Cross-platform app development has become a buzzword in the tech world, and for a good reason. With businesses needing to target multiple devices and platforms, frameworks like Flutter are transforming the way developers approach software projects. As we move into 2024, Flutter’s importance continues to grow, promising new opportunities for developers and enterprises alike. So, what does the future hold for Flutter? And why should businesses keep an eye on it?",
    // },
  ];
  return (
    <>
      <div className="portfolio_grid_container">
        {BlogContents.map((item) => (
          <>
            <GridDesign
              title={item.title}
              decription={item.content}
              image={item.image}
              link={item.link}
              mode='BLOG'
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Blog;
