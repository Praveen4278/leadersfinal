import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import AITraining from "@/pages/AITraining";
import Community from "@/pages/Community";
import SuccessStories from "@/pages/SuccessStories";
import Clients from "@/pages/Clients";
import Contact from "@/pages/Contact";
import WhyUs from "@/pages/WhyUs";
import WomenLeadershipDetail from "@/pages/WomenLeadershipDetail";
import BehaviouralIntelligenceDetail from "@/pages/BehaviouralIntelligenceDetail";
import StrategicTeamSkillsDetail from "@/pages/StrategicTeamSkillsDetail";
import ImmersiveCohorts from "@/pages/ImmersiveCohorts";
import VirtualWorkshops from "@/pages/VirtualWorkshops";
import ClassroomTraining from "@/pages/ClassroomTraining";
import OutboundTraining from "@/pages/OutboundTraining";

const queryClient = new QueryClient();

function MetaTags() {
  const [location] = useLocation();

  useEffect(() => {
    const metaData: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Leaders in Lipstick® — Women Leadership Training & Development',
        description: 'Leaders in Lipstick® — Empowering women leaders globally through transformative programs, coaching, and community.'
      },
      '/about': {
        title: 'About Us — Leaders in Lipstick®',
        description: 'Learn about our mission to transform leadership capability for inclusive, high-performing organisations.'
      },
      '/programs': {
        title: 'Our Programs — Leaders in Lipstick®',
        description: 'Explore our 22 leadership programs for women, including immersive cohorts, virtual workshops, and more.'
      },
      '/programs/immersive-cohorts': {
        title: 'Immersive Cohorts — Leaders in Lipstick®',
        description: 'Multi-session cohort programs with peer accountability and structured leadership development.'
      },
      '/programs/virtual-workshops': {
        title: 'Virtual Workshops — Leaders in Lipstick®',
        description: 'Live online leadership training sessions for global and distributed teams.'
      },
      '/programs/classroom-training': {
        title: 'Classroom Training — Leaders in Lipstick®',
        description: 'Facilitator-led in-person leadership training at your premises or venue.'
      },
      '/programs/outbound-training': {
        title: 'Outbound Training — Leaders in Lipstick®',
        description: 'Experiential leadership learning through real-world outdoor activities.'
      },
      '/ai-training': {
        title: 'AI Training — Leaders in Lipstick®',
        description: 'Future-ready programs embedding practical AI literacy into leadership.'
      },
      '/community': {
        title: 'Who We Serve — Leaders in Lipstick®',
        description: 'Discover the organisations and communities we partner with for leadership development.'
      },
      '/success-stories': {
        title: 'Success Stories — Leaders in Lipstick®',
        description: 'Read testimonials and success stories from women leaders we have empowered.'
      },
      '/clients': {
        title: 'Our Clients — Leaders in Lipstick®',
        description: 'Explore the organisations that trust Leaders in Lipstick® for leadership training.'
      },
      '/contact': {
        title: 'Contact Us — Leaders in Lipstick®',
        description: 'Get in touch with Leaders in Lipstick® to discuss your leadership development needs.'
      }
    };

    const meta = metaData[location] || {
      title: 'Leaders in Lipstick®',
      description: 'Leaders in Lipstick® — Empowering women leaders globally through transformative programs, coaching, and community.'
    };

    document.title = meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.title);
    }
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', meta.description);
    }
  }, [location]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <MetaTags />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/immersive-cohorts" component={ImmersiveCohorts} />
        <Route path="/programs/virtual-workshops" component={VirtualWorkshops} />
        <Route path="/programs/classroom-training" component={ClassroomTraining} />
        <Route path="/programs/outbound-training" component={OutboundTraining} />
        <Route path="/ai-training" component={AITraining} />
        <Route path="/community" component={Community} />
        <Route path="/success-stories" component={SuccessStories} />
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
        <Route path="/why-us" component={WhyUs} />
        <Route path="/women-leadership" component={WomenLeadershipDetail} />
        <Route path="/behavioural-intelligence" component={BehaviouralIntelligenceDetail} />
        <Route path="/strategic-team-skills" component={StrategicTeamSkillsDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
