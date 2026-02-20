import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import ProfessionalServicesPage from "./pages/services/ProfessionalServicesPage";
import AcademicServicesPage from "./pages/services/AcademicServicesPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsPage from "./pages/legal/TermsPage";
import RefundPolicyPage from "./pages/legal/RefundPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "register", Component: RegisterPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "faq", Component: FAQPage },
      { path: "services/professional", Component: ProfessionalServicesPage },
      { path: "services/academic", Component: AcademicServicesPage },
      { path: "courses", Component: CoursesPage },
      { path: "courses/:courseSlug", Component: CourseDetailPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "refund-policy", Component: RefundPolicyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);