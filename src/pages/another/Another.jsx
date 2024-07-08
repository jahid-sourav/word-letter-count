import PageTitle from "@/components/custom/pageTitle/PageTitle";
import { FaBeer } from "react-icons/fa";

function Another() {
  return (
    <>
      <PageTitle title="Another" />
      <section className="py-6">
        <div className="template-container">
          <h2 className="flex items-center justify-center gap-x-1">
            Another Page <FaBeer className="text-green-600" />
          </h2>
        </div>
      </section>
    </>
  );
}

export default Another;
