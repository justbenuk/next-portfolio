import Quote from "@/components/ui/quote";
import ServiceItem from "@/components/services/service-item";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I Can Do | Just Ben UK",
  description:
    "I am always trying to better myself, by creating more and more complex web applications. This is what I can do at the moment",
};
export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-0">
      <Quote text="I never claim to be anything different, I am self-taught and love to build things" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <ServiceItem
          title="Simple Blogs"
          description="A fullstack blog application that can be used to display information about your services or products that doesn't require an online store"
        />
        <ServiceItem
          title="SPA (Single Page Application)"
          description="These are perfect for single page websites that would like to show their brand. Requires just a few pages to show location, contact details and information about the services you offer"
        />
        <ServiceItem
          title="Get Data from Another Source"
          description="Do you need to display information from another source. I work with API's too. This can be used for internal or externals use."
        />
        <ServiceItem
          title="Online Store"
          description="This is what I am working towards now, Building fully managed online stores customised to your requirements, including carts, payments and much much more"
        />
      </div>
    </div>
  );
}
