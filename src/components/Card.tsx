import cartIcon from "../assets/icon-cart.svg";

export const Card = () => {
  return (
    <article className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row sm:w-[600px] ">
      <img
        className="block sm:hidden"
        src="/image-product-mobile.jpg"
        alt="Gabrielle Parfum"
      />
      <img
        className="hidden sm:block h-[450px] flex-1"
        src="/image-product-desktop.jpg"
        alt="Gabrielle Parfum"
      />
      <section className="p-5 font-sans sm:flex-1 sm:p-8">
        <p className="text-dark-grayish-blue text-xs tracking-[.4em] font-medium my-2 uppercase">
          Perfume
        </p>
        <h1 className="text-dark-blue font-serif text-3xl">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-dark-grayish-blue text-sm font-medium leading-6 my-5">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <strong className="text-cyan font-serif text-3xl align-middle block xs:inline">
          $149.99
        </strong>
        <p className="text-dark-grayish-blue line-through align-middle inline text-xs ml-5">
          $169.99
        </p>
        <button className="bg-cyan text-white flex justify-center items-center gap-3 w-full rounded-lg p-3 mt-3 text-sm hover:bg-dark-cyan sm:mt-7">
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </section>
    </article>
  );
};
