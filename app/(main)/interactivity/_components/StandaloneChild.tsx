import isClient from "@/utils/isClient";

/** This Component aims to display a console log into the server or browser terminal.
 *
 * It also verifies weither the component has access to the window global object to define if it's server or client side
 */
const StandaloneChild = () => {
  console.log("Hello from standalone child");

  return (
    <div className="rounded-md p-2 mt-2 bg-gray-100 text-slate-950">
      {isClient() ? <p>Client</p> : <p>Server</p>}
    </div>
  );
};

export default StandaloneChild;
