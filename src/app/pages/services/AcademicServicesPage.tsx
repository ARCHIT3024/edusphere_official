import { motion } from "motion/react";
import { GraduationCap, BookOpen, Users, CheckCircle, Star } from "lucide-react";
import LeadCaptureForm from "../../components/LeadCaptureForm";

export default function AcademicServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E75B6] to-[#1e5a96] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Academic Services
            </h1>
            <p className="text-xl text-blue-100">
              Personalized tutoring and coaching for students from Class 6 to 12
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence in Academic Coaching
            </h2>
            <p className="text-xl text-gray-600">
              Our academic services provide personalized attention to help students excel in
              their studies. With experienced tutors and proven teaching methods, we ensure
              every student reaches their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "All Subjects Covered",
                description: "Mathematics, Science, English, and Social Studies for classes 6-12",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Qualified teachers with years of experience in CBSE, ICSE, and State boards",
              },
              {
                icon: Star,
                title: "Proven Results",
                description: "Students show average 30% improvement in grades within 3 months",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#2E75B6]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects & Classes */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subjects We Teach
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tutoring for Classes 6 to 12
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                subject: "Mathematics",
                description: "Algebra, Geometry, Trigonometry, Calculus, Statistics",
                grades: "Classes 6-12",
              },
              {
                subject: "Science",
                description: "Physics, Chemistry, Biology - Theory & Practical",
                grades: "Classes 6-12",
              },
              {
                subject: "English",
                description: "Grammar, Literature, Writing Skills, Communication",
                grades: "Classes 6-12",
              },
              {
                subject: "Social Studies",
                description: "History, Geography, Civics, Economics",
                grades: "Classes 6-12",
              },
            ].map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.subject}</h3>
                <p className="text-gray-600 mb-3">{subject.description}</p>
                <span className="inline-block bg-blue-50 text-[#2E75B6] px-3 py-1 rounded-full text-sm font-medium">
                  {subject.grades}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Boards Covered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Education Boards We Support
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["CBSE", "ICSE", "State Board (Jharkhand)", "Other Boards"].map((board, index) => (
                <span
                  key={index}
                  className="bg-[#2E75B6] text-white px-6 py-2 rounded-full font-medium"
                >
                  {board}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Teaching Approach
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe every student learns differently. Our personalized approach ensures
                each student gets the attention and methodology that works best for them.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized learning plans based on student's needs",
                  "Interactive and engaging teaching methods",
                  "Regular assessments and progress tracking",
                  "Doubt clearing sessions and practice tests",
                  "Exam preparation and revision strategies",
                  "Parent-teacher communication and updates",
                ].map((method, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#28A745] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2E75B6] to-[#1e5a96] text-white rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Class Options</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">One-on-One Tutoring</h4>
                  <p className="text-blue-100">
                    Individual attention for focused learning and faster progress
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Small Group Classes</h4>
                  <p className="text-blue-100">
                    Interactive learning with peers (Maximum 5 students per batch)
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Online & Offline</h4>
                  <p className="text-blue-100">
                    Choose the mode that works best for you - flexible scheduling available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Tutors",
                description: "Qualified teachers with proven track records and teaching certifications",
              },
              {
                title: "Flexible Scheduling",
                description: "Classes at times convenient for students - evenings and weekends available",
              },
              {
                title: "Study Materials",
                description: "Comprehensive notes, practice papers, and reference materials provided",
              },
              {
                title: "Regular Tests",
                description: "Weekly tests and monthly assessments to track progress",
              },
              {
                title: "Doubt Sessions",
                description: "Dedicated time for clearing doubts and revising difficult concepts",
              },
              {
                title: "Affordable Fees",
                description: "Quality education at reasonable prices with flexible payment options",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                result: "45% → 89%",
                subject: "Mathematics",
                class: "Class 10",
                quote: "The personalized attention helped me understand concepts I struggled with for years!",
              },
              {
                result: "68% → 92%",
                subject: "Science",
                class: "Class 12",
                quote: "Excellent teaching methods and regular practice tests boosted my confidence.",
              },
              {
                result: "52% → 85%",
                subject: "Overall",
                class: "Class 9",
                quote: "My grades improved significantly across all subjects in just 4 months!",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#28A745] to-[#20873a] text-white rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">{story.result}</div>
                <div className="text-lg mb-1">{story.subject}</div>
                <div className="text-sm mb-4 text-green-100">{story.class}</div>
                <p className="italic text-green-50">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boost Your Academic Performance
            </h2>
            <p className="text-xl text-gray-600">
              Join our academic coaching program and see the difference
            </p>
          </motion.div>
          
          <LeadCaptureForm
            title="Enroll for Academic Coaching"
            subtitle="Tell us about your requirements and we'll create a personalized learning plan"
            buttonText="Get Free Demo Class"
          />
        </div>
      </section>
    </div>
  );
}
