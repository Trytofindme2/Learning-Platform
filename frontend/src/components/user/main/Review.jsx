import React from 'react'

const Review = () => {
  return (
    <div>
       <section class="py-16 bg-white">
            <div class="container mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-12">What Our Learners Say</h3>
            <div class="grid md:grid-cols-3 gap-10">
                <div class="bg-gray-50 p-6 rounded-lg shadow">
                <p class="text-gray-600">"I finally spoke Japanese confidently thanks to LinguaLearn!"</p>
                <h5 class="mt-4 font-semibold">- Ayumi K.</h5>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow">
                <p class="text-gray-600">"The AI practice tool improved my pronunciation massively."</p>
                <h5 class="mt-4 font-semibold">- Daniel M.</h5>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow">
                <p class="text-gray-600">"Learning Spanish felt fun with the gamified system!"</p>
                <h5 class="mt-4 font-semibold">- Lucia R.</h5>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Review
