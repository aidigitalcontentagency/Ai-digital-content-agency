# AI Digital Content Agency

A modern, full-stack web application for an AI-powered digital content agency built with Next.js, Firebase, and Tailwind CSS.

## Features

### 🎯 Core Services
- **Blog Writing**: AI-generated blog posts and articles with SEO optimization
- **Graphic Design**: AI-created visuals and graphics with multiple styles
- **Video Production**: Script-to-video generation with HD quality
- **Voiceover Services**: Natural-sounding AI voiceovers in multiple languages

### 🔐 Authentication & User Management
- User registration and login with Firebase Auth
- Role-based access control (Client/Admin)
- Secure user profiles and preferences

### 📊 Dashboard Features
- **Client Dashboard**: Order management, project tracking, download center
- **Admin Dashboard**: Order management, user analytics, revenue tracking
- Real-time order status updates
- Comprehensive statistics and reporting

### 🛠 Technical Features
- Responsive design with Tailwind CSS
- Real-time database with Firestore
- API routes for AI content generation
- Zapier integration for workflow automation
- Modern React hooks and components

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Firebase Functions
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Integrations**: Zapier webhooks

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aidigitalcontentagency/Ai-digital-content-agency.git
   cd Ai-digital-content-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your actual configuration:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # AI Service API Keys
   OPENAI_API_KEY=your_openai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key

   # Zapier Webhook URLs
   ZAPIER_NEW_ORDER_WEBHOOK=https://hooks.zapier.com/hooks/catch/your_webhook_id/
   ZAPIER_ORDER_COMPLETE_WEBHOOK=https://hooks.zapier.com/hooks/catch/your_webhook_id/
   ZAPIER_USER_REGISTRATION_WEBHOOK=https://hooks.zapier.com/hooks/catch/your_webhook_id/
   ```

4. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password
   - Create a Firestore database
   - Add your web app and copy the configuration
   - Update the Firebase config in `utils/firebase.js`

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── OrderForm.js    # Order placement form
│   └── OrderCard.js    # Order display card
├── pages/              # Next.js pages
│   ├── index.js        # Landing page
│   ├── login.js        # User login
│   ├── signup.js       # User registration
│   ├── dashboard.js    # Client dashboard
│   ├── admin.js        # Admin dashboard
│   └── api/            # API routes
│       ├── generate-blog.js
│       ├── generate-graphics.js
│       ├── generate-video.js
│       └── generate-voiceover.js
├── utils/              # Utility functions
│   ├── firebase.js     # Firebase configuration
│   ├── aiHelpers.js    # AI service helpers
│   └── zapier.js       # Zapier integration
├── styles/             # CSS styles
│   └── globals.css     # Global styles
└── tailwind.config.js  # Tailwind configuration
```

## Environment Variables

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key | `AIzaSyC...` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | `project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID | `my-project` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | `project.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID | `123456789` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID | `1:123:web:abc123` |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key for content generation | - |
| `ANTHROPIC_API_KEY` | Anthropic API key for content generation | - |
| `ELEVENLABS_API_KEY` | ElevenLabs API key for voiceovers | - |
| `ZAPIER_*_WEBHOOK` | Zapier webhook URLs for automation | - |

## API Endpoints

### Content Generation APIs

- `POST /api/generate-blog` - Generate blog content
- `POST /api/generate-graphics` - Generate graphics
- `POST /api/generate-video` - Generate video content
- `POST /api/generate-voiceover` - Generate voiceovers

### Request Format

```javascript
// Blog generation
{
  "topic": "AI in Healthcare",
  "wordCount": 1000,
  "tone": "professional",
  "keywords": ["AI", "healthcare", "technology"]
}

// Graphics generation
{
  "prompt": "Modern tech startup office",
  "style": "professional",
  "dimensions": "1920x1080"
}

// Video generation
{
  "script": "Welcome to our AI agency...",
  "duration": 60,
  "style": "professional"
}

// Voiceover generation
{
  "text": "Welcome to our services",
  "voice": "professional",
  "language": "en"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@aidigitalagency.com or create an issue in this repository.

## Roadmap

- [ ] Payment integration (Stripe)
- [ ] Advanced AI model selection
- [ ] Bulk order processing
- [ ] API rate limiting
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced user roles and permissions
