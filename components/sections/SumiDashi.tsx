"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  {
    url: "https://www.dropbox.com/scl/fi/yhivq8qg8ylfbsloqipob/IMG_4923.png?rlkey=ofk9z2ok46s0zdudyhtzaf8iy&raw=1",
    alt: "トータルステーションによる測量作業",
  },
  {
    url: "https://www.dropbox.com/scl/fi/v8raeibeanyk3zwsmu37h/IMG_4934.png?rlkey=43aeb239s2gd9yniva7y8vcsr&raw=1",
    alt: "地面への墨出し作業",
  },
];

const SumiDashi = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">墨出しとは</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/5">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full rounded-xl overflow-hidden"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative aspect-[4/3] max-h-[300px]">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-full md:w-3/5 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    墨出し工事とは、建設現場のあらゆる作業の基準となる<br />
                    「線」を引く仕事です。
                  </p>
                  <p className="mb-4">
                    建物をつくるにあたり、最初から最後まで現場に関わる、<br />
                    非常に重要な業務でもあります。
                  </p>
                  <p className="mb-4">
                    型枠、鉄筋、鉄骨、内装、外装など、全ての工事の基準となるため、<br />
                    高い精度が求められる仕事です。
                  </p>
                  <p className="mb-4">
                    しかしその分、建物が完成したときの達成感はひとしおで、<br />
                    大きなやりがいを感じられます。
                  </p>
                  <p>
                    近年では、レーザー照射器などの測定技術も導入されており、<br />
                    柱や壁の直角・水平精度をより正確に確認することが可能になりました。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SumiDashi;