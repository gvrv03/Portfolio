import { Education, experiences } from "@/JSONData/DATAGVRV";
import Image from "next/image";

export function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">
        Academics 
      </h2>
      <div className="space-y-6">
        {Education.map((exp, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl font-bold">
                <Image src={exp?.logo} alt={exp?.Institute} width={100} className="w-[70%]" height={100} />
              </div>
              <div>
                <h3 className="text-white font-semibold">{exp?.Institute}</h3>
                <p className="text-gray-400 text-sm">{exp?.branch}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
