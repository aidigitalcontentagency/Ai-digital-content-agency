import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, Image, Video, Mic, ArrowRight, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';

export default function Home() {
  const [activeService, setActiveService] = useState('blog');

  const services = [
    {
      id: 'blog',
      name: 'Blog Writing',
      icon: FileText,
      description: 'AI-powered blog posts and articles that engage your audience',
      features: ['SEO Optimized', 'Custom Topics', 'Multiple Formats', 'Fast Delivery'],
      price: 'Starting at $25',
      color: 'text-blue-600'
    },
    {
      id: 'graphics',
      name: 'Graphic Design',
      icon: Image,
      description: 'Stunning visuals and graphics created with AI technology',
      features: ['Custom Designs', 'Multiple Styles', 'High Resolution', 'Commercial Use'],
      price: 'Starting at $15',
      color: 'text-green-600'
    },
    {
      id: 'video',
      name: 'Video Production',
      icon: Video,
      description: 'Professional video content generated with cutting-edge AI',
      features: ['Script to Video', 'Multiple Formats', 'HD Quality', 'Custom Branding'],
      price: 'Starting at $50',
      color: 'text-purple-600'
    },
    {
      id: 'voiceover',
      name: 'Voiceover Services',
      icon: Mic,
      description: 'Natural-sounding AI voiceovers in multiple languages',
      features: ['Multiple Voices', 'Any Language', 'Studio Quality', 'Fast Turnaround'],
      price: 'Starting at $20',
      color: 'text-orange-600'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '1,000+', icon: Users },
    { label: 'Projects Completed', value: '5,000+', icon: CheckCircle },
    { label: 'Average Delivery', value: '24 Hours', icon: Clock },
    { label: 'Success Rate', value: '99%', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'The AI-generated content exceeded our expectations. Quality is outstanding and delivery is lightning fast.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Content Creator',
      company: 'Digital Media Co.',
      content: 'Amazing service! The blog posts are well-researched and perfectly match our brand voice.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Local Bakery',
      content: 'Affordable, professional, and quick. Exactly what my business needed for social media content.',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>AI Digital Agency - Professional AI Content Creation Services</title>
        <meta name="description" content="Transform your business with AI-powered content creation. Get high-quality blogs, graphics, videos, and voiceovers delivered fast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transform Your Business with
              <span className="block text-yellow-300">AI-Powered Content</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
              Get professional blogs, stunning graphics, engaging videos, and natural voiceovers 
              created by advanced AI technology in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/signup" className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                Get Started Free
              </Link>
              <Link href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional content creation services, 
              all powered by cutting-edge artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                    activeService === service.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-primary-600 mb-4">{service.price}</div>
                  <Link href="/signup" className="w-full btn-primary text-center block">
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get professional content in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Service</h3>
              <p className="text-gray-600">
                Select from blog writing, graphics, video, or voiceover services based on your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Provide Details</h3>
              <p className="text-gray-600">
                Fill out a simple form with your requirements, preferences, and any specific instructions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Content</h3>
              <p className="text-gray-600">
                Receive your high-quality, AI-generated content within 24 hours or less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who trust us with their content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of businesses already using AI to create amazing content. 
            Get started today with our free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Start Free Trial
            </Link>
            <Link href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">contact@aidigitalagency.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Response Time</div>
                    <div className="text-gray-600">Within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="input-field" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="input-field" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}