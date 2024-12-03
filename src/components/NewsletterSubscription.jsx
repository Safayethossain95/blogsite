

function NewsletterSubscription() {
  return (
    <div className="bg-white p-8 rounded-lg  text-center max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-black mb-4">Subscribe to our Newsletter</h2>
      <p className="text-gray-700 mb-6">
        Subscribe to our email newsletter to get the latest posts delivered right to your email.
      </p>
      <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full px-4 py-3 text-black focus:outline-none"
        />
        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        Pure inspiration, zero spam ✨
      </p>
    </div>
  );
}

export default NewsletterSubscription;
