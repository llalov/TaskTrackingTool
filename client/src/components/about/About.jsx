export default function About() {
    return(
        <div className="mt-20">
            <section className="bg-blue-100 p-8 rounded-2xl shadow-md max-w-2xl mx-auto text-center space-y-4">
                <h2 className="text-3xl font-bold text-blue-900">About Us</h2>
                <p className="text-gray-700">
                Task Tracking Tool helps teams streamline their workflow, collaborate efficiently, 
                and manage tasks with ease.
                </p>
                <div className="flex justify-center gap-6 mt-4">
                    <div className="bg-white p-4 rounded-lg shadow-md w-40">
                        <h3 className="text-xl font-semibold text-blue-800">Fast</h3>
                        <p className="text-gray-600 text-sm">Optimized for speed and efficiency.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md w-40">
                        <h3 className="text-xl font-semibold text-blue-800">Reliable</h3>
                        <p className="text-gray-600 text-sm">Built with stability in mind.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md w-40">
                        <h3 className="text-xl font-semibold text-blue-800">Collaborative</h3>
                        <p className="text-gray-600 text-sm">Seamless teamwork and communication.</p>
                    </div>
                </div>
                <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
                Learn More
                </button>
            </section>
        </div>
        
    );
}