import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "figma:asset/7677bcf115ddeaaf3993927f7d42d4a841a632ac.png";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  Eye,
  Heart,
  Brain,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Target,
  DollarSign,
  ArrowRight,
  Smartphone,
  Activity,
  MapPin,
  Bell,
  Layers,
  Server,
  Database,
  Cloud,
  ArrowDown,
  AlertCircle,
  FileText,
  Presentation
} from "lucide-react";

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a printable version
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Navilli - Healthcare Companion Pitch Deck</title>
          <style>
            @page { size: landscape; margin: 0; }
            body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
            .slide { 
              width: 100vw; 
              height: 100vh; 
              page-break-after: always; 
              display: flex; 
              flex-direction: column; 
              justify-content: center; 
              align-items: center;
              padding: 60px;
              box-sizing: border-box;
            }
            .slide:last-child { page-break-after: avoid; }
            h1 { font-size: 3.5rem; margin: 0 0 20px 0; text-align: center; }
            h2 { font-size: 2.5rem; margin: 0 0 30px 0; text-align: center; }
            h3 { font-size: 2rem; margin: 0 0 20px 0; }
            p { font-size: 1.3rem; line-height: 1.8; margin: 10px 0; text-align: center; }
            .logo { max-width: 200px; margin-bottom: 30px; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; width: 100%; max-width: 1200px; }
            .card { padding: 30px; background: #f8f9fa; border-radius: 12px; }
            .card h3 { font-size: 1.8rem; margin-bottom: 15px; }
            .card p { font-size: 1.1rem; text-align: left; }
            .list { text-align: left; width: 100%; max-width: 900px; }
            .list li { font-size: 1.3rem; margin: 15px 0; }
            .highlight { color: #6366f1; font-weight: 600; }
            .gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .center { text-align: center; }
            .badge { display: inline-block; padding: 8px 20px; background: #6366f1; color: white; border-radius: 20px; font-size: 1rem; margin: 10px 5px; }
            .stat { font-size: 4rem; font-weight: bold; color: #6366f1; margin: 0; }
            .stat-label { font-size: 1.2rem; color: #666; margin-top: 10px; }
            .footer { position: absolute; bottom: 20px; font-size: 0.9rem; color: #999; }
          </style>
        </head>
        <body>
          ${generateAllSlides()}
        </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const handleDownloadPPT = async () => {
    const PptxGenJS = (await import('pptxgenjs')).default;
    const pptx = new PptxGenJS();
    
    // Set presentation properties
    pptx.author = 'Navilli Healthcare Companion';
    pptx.company = 'Navilli';
    pptx.title = 'Healthcare Companion Pitch Deck';
    pptx.subject = 'Unified AI-Powered Healthcare Platform';
    
    // Define colors
    const colors = {
      primary: '6366f1',
      purple: '9333ea',
      blue: '3b82f6',
      red: 'ef4444',
      green: '10b981',
      orange: 'f97316',
      white: 'FFFFFF',
      lightGray: 'f8f9fa',
      darkGray: '666666'
    };

    // Slide 1: Title
    let slide = pptx.addSlide();
    slide.background = { fill: '667eea' };
    slide.addText('Navilli', { 
      x: 0.5, y: 2.0, w: 9, h: 1, 
      fontSize: 72, bold: true, color: colors.white, align: 'center' 
    });
    slide.addText('Healthcare Companion', { 
      x: 0.5, y: 3.0, w: 9, h: 0.8, 
      fontSize: 48, color: colors.white, align: 'center' 
    });
    slide.addText('Unified AI-Powered Healthcare for Visual Assistance & Remote Patient Monitoring', { 
      x: 1, y: 4.0, w: 8, h: 0.6, 
      fontSize: 24, color: colors.white, align: 'center' 
    });
    slide.addText('Confidential - Product Pitch 2025', { 
      x: 0.5, y: 7.0, w: 9, h: 0.3, 
      fontSize: 14, color: colors.white, align: 'center', transparency: 25 
    });

    // Slide 2: Problem Statement
    slide = pptx.addSlide();
    slide.addText('The Problem', { 
      x: 0.5, y: 0.5, w: 9, h: 0.8, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    // Left box - Visual Impairment
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: 1.5, w: 4.5, h: 4,
      fill: { color: 'e0f2fe' }
    });
    slide.addText('🦯 Visually Impaired Challenges', { 
      x: 0.7, y: 1.7, w: 4.1, h: 0.5, 
      fontSize: 22, bold: true, color: colors.blue 
    });
    slide.addText([
      { text: '• 285 million people worldwide with visual impairment\n', options: { breakLine: true } },
      { text: '• Limited independence in daily navigation\n', options: { breakLine: true } },
      { text: '• Difficulty accessing healthcare services\n', options: { breakLine: true } },
      { text: '• Fragmented assistive technology solutions', options: {} }
    ], { x: 0.7, y: 2.4, w: 4.1, h: 2.8, fontSize: 16, color: '333333' });
    
    // Right box - Healthcare Gaps
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.5, y: 1.5, w: 4.5, h: 4,
      fill: { color: 'fee2e2' }
    });
    slide.addText('🏥 Healthcare Monitoring Gaps', { 
      x: 5.7, y: 1.7, w: 4.1, h: 0.5, 
      fontSize: 22, bold: true, color: colors.red 
    });
    slide.addText([
      { text: '• Aging population needs remote monitoring\n', options: { breakLine: true } },
      { text: '• Hospital readmission rates remain high\n', options: { breakLine: true } },
      { text: '• Caretaker burden and burnout\n', options: { breakLine: true } },
      { text: '• Disconnected care coordination', options: {} }
    ], { x: 5.7, y: 2.4, w: 4.1, h: 2.8, fontSize: 16, color: '333333' });

    // Slide 3: Solution
    slide = pptx.addSlide();
    slide.addText('Our Solution: Navilli Healthcare Companion', { 
      x: 0.5, y: 0.4, w: 9, h: 0.6, 
      fontSize: 40, bold: true, align: 'center', color: '1a1a1a' 
    });
    slide.addText('One Platform. Complete Care.', { 
      x: 0.5, y: 1.0, w: 9, h: 0.4, 
      fontSize: 28, align: 'center', color: colors.darkGray 
    });
    
    // 4 solution boxes in 2x2 grid
    const solutionBoxes = [
      { x: 0.5, y: 1.8, title: '👓 Visual Assistance', text: 'AI-powered object detection, navigation, and 24-language voice guidance through Smart Cane and Smart Glasses', color: 'dbeafe' },
      { x: 5.5, y: 1.8, title: '❤️ Remote Monitoring', text: 'Real-time vital signs tracking, medication management, and emergency response system', color: 'fee2e2' },
      { x: 0.5, y: 4.3, title: '🚕 Accessible Transportation', text: 'Integrated ride booking with voice-guided pickup and wheelchair-accessible options', color: 'd1fae5' },
      { x: 5.5, y: 4.3, title: '🏥 Care Coordination', text: 'Unified platform connecting patients, caretakers, physicians, nurses, and AI analytics', color: 'e9d5ff' }
    ];
    
    solutionBoxes.forEach(box => {
      slide.addShape(pptx.ShapeType.rect, {
        x: box.x, y: box.y, w: 4.5, h: 2.2,
        fill: { color: box.color }
      });
      slide.addText(box.title, { 
        x: box.x + 0.2, y: box.y + 0.2, w: 4.1, h: 0.4, 
        fontSize: 20, bold: true 
      });
      slide.addText(box.text, { 
        x: box.x + 0.2, y: box.y + 0.7, w: 4.1, h: 1.3, 
        fontSize: 14, color: '333333' 
      });
    });

    // Slide 4: Platform Capabilities
    slide = pptx.addSlide();
    slide.addText('Platform Capabilities', { 
      x: 0.5, y: 0.4, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    const features = [
      'Smart Device Integration: Cane, Glasses, Health Monitors, GPS Trackers',
      'AI-Powered Voice Assistant: 24 languages including Telugu, Tamil, Kannada, Malayalam',
      'Real-Time Health Monitoring: Heart rate, BP, O2, temperature tracking',
      'Emergency SOS System: Instant alerts to caretakers and medical staff',
      'Geo-Fencing & Tracking: Location monitoring with smart alerts',
      'Device Health Monitoring: Battery, connectivity, and diagnostics',
      'Medication Management: Reminders and adherence tracking',
      'Care Team Coordination: Role-based dashboards for all stakeholders'
    ];
    
    let yPos = 1.5;
    features.forEach(feature => {
      slide.addText('✓', { x: 1.0, y: yPos, w: 0.4, h: 0.4, fontSize: 24, color: colors.green, bold: true });
      slide.addText(feature, { x: 1.5, y: yPos, w: 7.5, h: 0.5, fontSize: 16, color: '333333' });
      yPos += 0.65;
    });

    // Slide 5: Role-Based Dashboards
    slide = pptx.addSlide();
    slide.addText('Role-Based Dashboards', { 
      x: 0.5, y: 0.4, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    const roles = [
      { x: 0.5, y: 1.5, w: 3.0, title: '👤 Patient Portal', text: 'Voice assistance, health monitoring, ride booking, emergency SOS', color: 'dbeafe' },
      { x: 3.75, y: 1.5, w: 3.0, title: '❤️ Caretaker Dashboard', text: 'Patient monitoring, location tracking, task management, alerts', color: 'fecaca' },
      { x: 7.0, y: 1.5, w: 3.0, title: '⚕️ Physician Dashboard', text: 'Patient records, vitals review, prescription management, analytics', color: 'd1fae5' },
      { x: 0.5, y: 4.0, w: 3.0, title: '👩‍⚕️ Nurse Dashboard', text: 'Medication rounds, vital checks, care tasks, patient communication', color: 'fed7aa' },
      { x: 3.75, y: 4.0, w: 6.25, title: '🤖 AI Admin Dashboard', text: 'System analytics, staff management, device fleet monitoring, predictive insights, onboarding workflows', color: 'e9d5ff' }
    ];
    
    roles.forEach(role => {
      slide.addShape(pptx.ShapeType.rect, {
        x: role.x, y: role.y, w: role.w, h: 2.0,
        fill: { color: role.color }
      });
      slide.addText(role.title, { 
        x: role.x + 0.15, y: role.y + 0.2, w: role.w - 0.3, h: 0.4, 
        fontSize: 18, bold: true 
      });
      slide.addText(role.text, { 
        x: role.x + 0.15, y: role.y + 0.7, w: role.w - 0.3, h: 1.1, 
        fontSize: 13, color: '333333' 
      });
    });

    // Slide 6: System Architecture
    slide = pptx.addSlide();
    slide.addText('System Architecture (UML)', { 
      x: 0.5, y: 0.3, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    slide.addText('Three-Tier Scalable Architecture', { 
      x: 0.5, y: 0.9, w: 9, h: 0.4, 
      fontSize: 20, align: 'center', color: colors.darkGray 
    });
    
    // Layer 1: Presentation
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.5, y: 1.5, w: 7.0, h: 1.2,
      fill: { color: 'dbeafe' }
    });
    slide.addText('📱 Layer 1: Presentation (Frontend)', { 
      x: 1.7, y: 1.7, w: 6.6, h: 0.3, 
      fontSize: 18, bold: true, color: '1e40af' 
    });
    slide.addText('React + TypeScript  •  Tailwind CSS  •  5 Role Dashboards', { 
      x: 1.7, y: 2.1, w: 6.6, h: 0.3, 
      fontSize: 14, color: '333333' 
    });
    
    // Arrow
    slide.addText('↓ HTTPS/WSS', { 
      x: 4.0, y: 2.9, w: 2.0, h: 0.3, 
      fontSize: 16, align: 'center', color: colors.darkGray, bold: true 
    });
    
    // Layer 2: Application
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.5, y: 3.4, w: 7.0, h: 1.2,
      fill: { color: 'e9d5ff' }
    });
    slide.addText('⚙️ Layer 2: Application (Backend)', { 
      x: 1.7, y: 3.6, w: 6.6, h: 0.3, 
      fontSize: 18, bold: true, color: '7e22ce' 
    });
    slide.addText('Supabase Edge  •  Hono Server  •  AI/ML Engine  •  RESTful API', { 
      x: 1.7, y: 4.0, w: 6.6, h: 0.3, 
      fontSize: 14, color: '333333' 
    });
    
    // Arrow
    slide.addText('↓ SQL/REST', { 
      x: 4.0, y: 4.8, w: 2.0, h: 0.3, 
      fontSize: 16, align: 'center', color: colors.darkGray, bold: true 
    });
    
    // Layer 3: Data
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.5, y: 5.3, w: 7.0, h: 1.2,
      fill: { color: 'd1fae5' }
    });
    slide.addText('💾 Layer 3: Data (Storage)', { 
      x: 1.7, y: 5.5, w: 6.6, h: 0.3, 
      fontSize: 18, bold: true, color: '047857' 
    });
    slide.addText('PostgreSQL (Primary DB)  •  KV Store (Fast Cache)  •  Blob Storage (Files)', { 
      x: 1.7, y: 5.9, w: 6.6, h: 0.3, 
      fontSize: 14, color: '333333' 
    });
    
    // Performance metrics
    slide.addText('⚡ <200ms Latency  •  🔒 AES-256 Encryption  •  📊 99.9% Uptime SLA', { 
      x: 1.5, y: 6.7, w: 7.0, h: 0.3, 
      fontSize: 14, align: 'center', color: colors.primary, bold: true 
    });

    // Slide 7: Market Opportunity
    slide = pptx.addSlide();
    slide.addText('Market Opportunity', { 
      x: 0.5, y: 0.5, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    // Market stats
    slide.addText('$50B', { 
      x: 1.0, y: 2.0, w: 2.5, h: 0.8, 
      fontSize: 56, bold: true, align: 'center', color: colors.primary 
    });
    slide.addText('Global Assistive\nTechnology Market', { 
      x: 1.0, y: 2.9, w: 2.5, h: 0.6, 
      fontSize: 16, align: 'center', color: colors.darkGray 
    });
    
    slide.addText('$140B', { 
      x: 3.75, y: 2.0, w: 2.5, h: 0.8, 
      fontSize: 56, bold: true, align: 'center', color: colors.primary 
    });
    slide.addText('Remote Patient\nMonitoring Market', { 
      x: 3.75, y: 2.9, w: 2.5, h: 0.6, 
      fontSize: 16, align: 'center', color: colors.darkGray 
    });
    
    slide.addText('2.2B', { 
      x: 6.5, y: 2.0, w: 2.5, h: 0.8, 
      fontSize: 56, bold: true, align: 'center', color: colors.primary 
    });
    slide.addText('People with\nVision Impairment', { 
      x: 6.5, y: 2.9, w: 2.5, h: 0.6, 
      fontSize: 16, align: 'center', color: colors.darkGray 
    });
    
    // Target segments
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.5, y: 4.3, w: 7.0, h: 2.5,
      fill: { color: colors.lightGray }
    });
    slide.addText('Target Market Segments', { 
      x: 1.7, y: 4.5, w: 6.6, h: 0.4, 
      fontSize: 20, bold: true 
    });
    slide.addText([
      { text: '• Visually impaired individuals seeking independence\n', options: { breakLine: true } },
      { text: '• Elderly patients requiring remote health monitoring\n', options: { breakLine: true } },
      { text: '• Healthcare facilities needing care coordination\n', options: { breakLine: true } },
      { text: '• Caretakers managing multiple patients', options: {} }
    ], { x: 1.7, y: 5.0, w: 6.6, h: 1.5, fontSize: 16, color: '333333' });

    // Slide 8: Competitive Advantage
    slide = pptx.addSlide();
    slide.addText('Why Navilli Wins', { 
      x: 0.5, y: 0.5, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    const advantages = [
      '🎯 Unified Platform: First solution combining visual assistance with comprehensive healthcare monitoring',
      '🌍 Global Accessibility: 24-language support including major Indian languages',
      '🤖 AI-Driven Intelligence: Predictive analytics and personalized care recommendations',
      '👥 Complete Ecosystem: Connects all stakeholders in the care continuum',
      '📱 Device Agnostic: Works with multiple assistive devices and health monitors',
      '🔒 Healthcare Compliant: HIPAA-ready architecture with secure data handling',
      '⚡ Real-Time Everything: Live monitoring, instant alerts, immediate response'
    ];
    
    let yPos2 = 1.5;
    advantages.forEach(adv => {
      slide.addText(adv, { x: 1.0, y: yPos2, w: 8.0, h: 0.6, fontSize: 15, color: '1a1a1a' });
      yPos2 += 0.75;
    });

    // Slide 9: Revenue Model
    slide = pptx.addSlide();
    slide.addText('Revenue Model', { 
      x: 0.5, y: 0.4, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    const revenueStreams = [
      { x: 0.5, y: 1.5, title: '💳 Subscription Tiers', items: ['Basic: $29/month - Core features', 'Premium: $79/month - Full platform', 'Enterprise: Custom - Healthcare facilities'], color: 'dbeafe' },
      { x: 5.5, y: 1.5, title: '🏥 B2B Healthcare', items: ['Hospital and clinic partnerships', 'Volume licensing for care facilities', 'White-label opportunities'], color: 'fecaca' },
      { x: 0.5, y: 4.3, title: '📱 Device Sales', items: ['Smart Cane hardware', 'Smart Glasses partnerships', 'Health monitoring devices'], color: 'd1fae5' },
      { x: 5.5, y: 4.3, title: '📊 Data & Analytics', items: ['Anonymized health insights', 'Research partnerships', 'API access for developers'], color: 'fed7aa' }
    ];
    
    revenueStreams.forEach(stream => {
      slide.addShape(pptx.ShapeType.rect, {
        x: stream.x, y: stream.y, w: 4.5, h: 2.2,
        fill: { color: stream.color }
      });
      slide.addText(stream.title, { 
        x: stream.x + 0.2, y: stream.y + 0.2, w: 4.1, h: 0.4, 
        fontSize: 20, bold: true 
      });
      slide.addText(stream.items.join('\n'), { 
        x: stream.x + 0.2, y: stream.y + 0.7, w: 4.1, h: 1.3, 
        fontSize: 13, color: '333333' 
      });
    });

    // Slide 10: Roadmap
    slide = pptx.addSlide();
    slide.addText('Current Status & Roadmap', { 
      x: 0.5, y: 0.4, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    // Completed Phase
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: 1.5, w: 4.5, h: 4.5,
      fill: { color: 'd1fae5' }
    });
    slide.addText('✅ Completed (Phase 1)', { 
      x: 0.7, y: 1.7, w: 4.1, h: 0.4, 
      fontSize: 22, bold: true, color: colors.green 
    });
    slide.addText([
      { text: '• Full platform MVP developed\n', options: { breakLine: true } },
      { text: '• 5 role-based dashboards\n', options: { breakLine: true } },
      { text: '• 24-language voice support\n', options: { breakLine: true } },
      { text: '• Device health monitoring\n', options: { breakLine: true } },
      { text: '• Location tracking & geo-fencing\n', options: { breakLine: true } },
      { text: '• Ride booking integration', options: {} }
    ], { x: 0.7, y: 2.2, w: 4.1, h: 3.5, fontSize: 15, color: '1a1a1a' });
    
    // Next Phase
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.5, y: 1.5, w: 4.5, h: 4.5,
      fill: { color: 'dbeafe' }
    });
    slide.addText('🚀 Next 6 Months (Phase 2)', { 
      x: 5.7, y: 1.7, w: 4.1, h: 0.4, 
      fontSize: 22, bold: true, color: colors.blue 
    });
    slide.addText([
      { text: '• Beta testing with 100 users\n', options: { breakLine: true } },
      { text: '• Hardware prototype refinement\n', options: { breakLine: true } },
      { text: '• Healthcare facility pilots\n', options: { breakLine: true } },
      { text: '• FDA/regulatory preparation\n', options: { breakLine: true } },
      { text: '• Insurance partnerships', options: {} }
    ], { x: 5.7, y: 2.2, w: 4.1, h: 3.5, fontSize: 15, color: '1a1a1a' });

    // Slide 11: Investment
    slide = pptx.addSlide();
    slide.addText('Investment Opportunity', { 
      x: 0.5, y: 0.5, w: 9, h: 0.6, 
      fontSize: 44, bold: true, align: 'center', color: '1a1a1a' 
    });
    
    slide.addText('Seeking', { 
      x: 0.5, y: 1.8, w: 9, h: 0.4, 
      fontSize: 24, align: 'center', color: colors.darkGray 
    });
    slide.addText('$2M', { 
      x: 0.5, y: 2.3, w: 9, h: 0.8, 
      fontSize: 64, bold: true, align: 'center', color: colors.primary 
    });
    slide.addText('Seed Round', { 
      x: 0.5, y: 3.2, w: 9, h: 0.4, 
      fontSize: 24, align: 'center', color: colors.darkGray 
    });
    slide.addText('To scale platform, complete hardware development, and launch commercial pilots', { 
      x: 1.5, y: 3.8, w: 7.0, h: 0.5, 
      fontSize: 18, align: 'center', color: '333333' 
    });
    
    // Use of Funds
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: 4.6, w: 4.0, h: 2.0,
      fill: { color: colors.lightGray }
    });
    slide.addText('Use of Funds', { 
      x: 1.0, y: 4.8, w: 3.6, h: 0.4, 
      fontSize: 18, bold: true 
    });
    slide.addText('• Product Development: 40%\n• Hardware Manufacturing: 25%\n• Sales & Marketing: 20%\n• Team Expansion: 15%', { 
      x: 1.0, y: 5.3, w: 3.6, h: 1.1, 
      fontSize: 14, color: '333333' 
    });
    
    // 12-Month Goals
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.2, y: 4.6, w: 4.0, h: 2.0,
      fill: { color: colors.lightGray }
    });
    slide.addText('12-Month Goals', { 
      x: 5.4, y: 4.8, w: 3.6, h: 0.4, 
      fontSize: 18, bold: true 
    });
    slide.addText('• 1,000+ active users\n• 5 healthcare partnerships\n• Hardware production ready\n• $500K ARR', { 
      x: 5.4, y: 5.3, w: 3.6, h: 1.1, 
      fontSize: 14, color: '333333' 
    });

    // Slide 12: Vision
    slide = pptx.addSlide();
    slide.background = { fill: '764ba2' };
    slide.addText('Our Vision', { 
      x: 0.5, y: 1.5, w: 9, h: 0.8, 
      fontSize: 52, bold: true, align: 'center', color: colors.white 
    });
    slide.addText('Empower every person to live independently and receive quality healthcare, regardless of physical limitations or location.', { 
      x: 1.0, y: 2.8, w: 8.0, h: 1.2, 
      fontSize: 24, align: 'center', color: colors.white 
    });
    slide.addText('Join us in transforming healthcare delivery\nand accessibility for millions worldwide.', { 
      x: 1.5, y: 4.5, w: 7.0, h: 1.0, 
      fontSize: 20, bold: true, align: 'center', color: colors.white 
    });

    // Slide 13: Contact
    slide = pptx.addSlide();
    slide.addText('Let\'s Connect', { 
      x: 0.5, y: 1.5, w: 9, h: 0.8, 
      fontSize: 52, bold: true, align: 'center', color: '1a1a1a' 
    });
    slide.addText('Navilli Healthcare Companion', { 
      x: 0.5, y: 2.8, w: 9, h: 0.5, 
      fontSize: 28, bold: true, align: 'center', color: colors.primary 
    });
    slide.addText('Healthcare Innovation for All', { 
      x: 0.5, y: 3.4, w: 9, h: 0.4, 
      fontSize: 20, align: 'center', color: colors.darkGray 
    });
    
    slide.addShape(pptx.ShapeType.rect, {
      x: 2.5, y: 4.2, w: 2.5, h: 0.5,
      fill: { color: colors.blue }
    });
    slide.addText('contact@navilli.health', { 
      x: 2.5, y: 4.2, w: 2.5, h: 0.5, 
      fontSize: 16, align: 'center', color: colors.white, bold: true 
    });
    
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.5, y: 4.2, w: 2.0, h: 0.5,
      fill: { color: colors.purple }
    });
    slide.addText('www.navilli.health', { 
      x: 5.5, y: 4.2, w: 2.0, h: 0.5, 
      fontSize: 16, align: 'center', color: colors.white, bold: true 
    });
    
    slide.addText('Ready to discuss partnership and investment opportunities', { 
      x: 1.5, y: 5.5, w: 7.0, h: 0.4, 
      fontSize: 16, align: 'center', color: colors.darkGray 
    });

    // Save the presentation
    pptx.writeFile({ fileName: 'Navilli_Healthcare_Companion_Pitch_Deck.pptx' });
  };

  const generateAllSlides = () => {
    return `
      <!-- Slide 1: Title -->
      <div class="slide gradient">
        <img src="${logo}" alt="Navilli" class="logo" />
        <h1>Navilli</h1>
        <p style="font-size: 2rem; margin-bottom: 40px;">Healthcare Companion</p>
        <p style="font-size: 1.5rem;">Unified AI-Powered Healthcare for Visual Assistance & Remote Patient Monitoring</p>
        <div class="footer">Confidential - Product Pitch 2025</div>
      </div>

      <!-- Slide 2: Problem Statement -->
      <div class="slide">
        <h2>The Problem</h2>
        <div class="grid">
          <div class="card">
            <h3>🦯 Visually Impaired Challenges</h3>
            <ul class="list">
              <li>285 million people worldwide with visual impairment</li>
              <li>Limited independence in daily navigation</li>
              <li>Difficulty accessing healthcare services</li>
              <li>Fragmented assistive technology solutions</li>
            </ul>
          </div>
          <div class="card">
            <h3>🏥 Healthcare Monitoring Gaps</h3>
            <ul class="list">
              <li>Aging population needs remote monitoring</li>
              <li>Hospital readmission rates remain high</li>
              <li>Caretaker burden and burnout</li>
              <li>Disconnected care coordination</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Slide 3: Solution -->
      <div class="slide">
        <h2>Our Solution: Navilli Healthcare Companion</h2>
        <p style="font-size: 1.8rem; margin-bottom: 40px;">One Platform. Complete Care.</p>
        <div class="grid">
          <div class="card">
            <h3>👓 Visual Assistance</h3>
            <p>AI-powered object detection, navigation, and 24-language voice guidance through Smart Cane and Smart Glasses</p>
          </div>
          <div class="card">
            <h3>❤️ Remote Monitoring</h3>
            <p>Real-time vital signs tracking, medication management, and emergency response system</p>
          </div>
          <div class="card">
            <h3>🚕 Accessible Transportation</h3>
            <p>Integrated ride booking with voice-guided pickup and wheelchair-accessible options</p>
          </div>
          <div class="card">
            <h3>🏥 Care Coordination</h3>
            <p>Unified platform connecting patients, caretakers, physicians, nurses, and AI analytics</p>
          </div>
        </div>
      </div>

      <!-- Slide 4: Key Features -->
      <div class="slide">
        <h2>Platform Capabilities</h2>
        <div class="list">
          <ul style="columns: 2; column-gap: 60px;">
            <li><strong>Smart Device Integration:</strong> Cane, Glasses, Health Monitors, GPS Trackers</li>
            <li><strong>AI-Powered Voice Assistant:</strong> 24 languages including Telugu, Tamil, Kannada, Malayalam</li>
            <li><strong>Real-Time Health Monitoring:</strong> Heart rate, BP, O2, temperature tracking</li>
            <li><strong>Emergency SOS System:</strong> Instant alerts to caretakers and medical staff</li>
            <li><strong>Geo-Fencing & Tracking:</strong> Location monitoring with smart alerts</li>
            <li><strong>Device Health Monitoring:</strong> Battery, connectivity, and diagnostics</li>
            <li><strong>Medication Management:</strong> Reminders and adherence tracking</li>
            <li><strong>Care Team Coordination:</strong> Role-based dashboards for all stakeholders</li>
          </ul>
        </div>
      </div>

      <!-- Slide 5: User Roles -->
      <div class="slide">
        <h2>Role-Based Dashboards</h2>
        <div class="grid">
          <div class="card">
            <h3>👤 Patient Portal</h3>
            <p>Voice assistance, health monitoring, ride booking, emergency SOS</p>
          </div>
          <div class="card">
            <h3>❤️ Caretaker Dashboard</h3>
            <p>Patient monitoring, location tracking, task management, alerts</p>
          </div>
          <div class="card">
            <h3>⚕️ Physician Dashboard</h3>
            <p>Patient records, vitals review, prescription management, analytics</p>
          </div>
          <div class="card">
            <h3>👩‍⚕️ Nurse Dashboard</h3>
            <p>Medication rounds, vital checks, care tasks, patient communication</p>
          </div>
          <div class="card" style="grid-column: span 2;">
            <h3>🤖 AI Admin Dashboard</h3>
            <p>System analytics, staff management, device fleet monitoring, predictive insights, onboarding workflows</p>
          </div>
        </div>
      </div>

      <!-- Slide 6: UML System Architecture -->
      <div class="slide">
        <h2>System Architecture (UML)</h2>
        <p style="margin-bottom: 30px;">Three-Tier Scalable Architecture</p>
        <div style="max-width: 1200px; margin: 0 auto;">
          <!-- Presentation Layer -->
          <div class="card" style="background: #dbeafe; border: 3px solid #3b82f6; margin-bottom: 20px;">
            <h3 style="color: #1e40af;">📱 Layer 1: Presentation (Frontend)</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>React + TypeScript</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">UI Framework</p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>Tailwind CSS</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">Styling</p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>5 Role Dashboards</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">Patient to Admin</p>
              </div>
            </div>
          </div>
          <p style="text-align: center; font-size: 2rem; margin: 15px 0;">↓ HTTPS/WSS</p>
          <!-- Application Layer -->
          <div class="card" style="background: #e9d5ff; border: 3px solid #a855f7; margin-bottom: 20px;">
            <h3 style="color: #7e22ce;">⚙️ Layer 2: Application (Backend)</h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px;">
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 0.95rem; margin: 0;"><strong>Supabase Edge</strong></p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 0.95rem; margin: 0;"><strong>Hono Server</strong></p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 0.95rem; margin: 0;"><strong>AI/ML Engine</strong></p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 0.95rem; margin: 0;"><strong>RESTful API</strong></p>
              </div>
            </div>
          </div>
          <p style="text-align: center; font-size: 2rem; margin: 15px 0;">↓ SQL/REST</p>
          <!-- Data Layer -->
          <div class="card" style="background: #d1fae5; border: 3px solid #10b981; margin-bottom: 20px;">
            <h3 style="color: #047857;">💾 Layer 3: Data (Storage)</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>PostgreSQL</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">Primary DB</p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>KV Store</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">Fast Cache</p>
              </div>
              <div style="background: #fff; padding: 10px; border-radius: 8px; text-align: center;">
                <p style="font-size: 1rem; margin: 0;"><strong>Blob Storage</strong></p>
                <p style="font-size: 0.9rem; margin: 5px 0 0 0; color: #666;">Files & Media</p>
              </div>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 25px;">
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; text-align: center;">
              <p style="font-size: 1.5rem; margin: 0;">⚡</p>
              <p style="font-size: 1.1rem; margin: 5px 0;"><strong>&lt;200ms</strong></p>
              <p style="font-size: 0.9rem; margin: 0; color: #666;">Avg Latency</p>
            </div>
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; text-align: center;">
              <p style="font-size: 1.5rem; margin: 0;">🔒</p>
              <p style="font-size: 1.1rem; margin: 5px 0;"><strong>AES-256</strong></p>
              <p style="font-size: 0.9rem; margin: 0; color: #666;">Encryption</p>
            </div>
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; text-align: center;">
              <p style="font-size: 1.5rem; margin: 0;">📊</p>
              <p style="font-size: 1.1rem; margin: 5px 0;"><strong>99.9%</strong></p>
              <p style="font-size: 0.9rem; margin: 0; color: #666;">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 6B: Data Flow Sequence Diagram -->
      <div class="slide">
        <h2>Real-Time Data Flow (UML Sequence)</h2>
        <p style="margin-bottom: 30px;">From IoT devices to care team dashboards</p>
        <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
          <div class="card" style="flex: 1; text-align: center; margin: 0 10px; background: #dbeafe;">
            <p style="font-size: 2rem; margin: 0;">📱</p>
            <h3 style="margin: 10px 0;">IoT Devices</h3>
            <p style="font-size: 0.9rem; color: #666;">Sensors & Wearables</p>
            <div style="margin-top: 15px; text-align: left; font-size: 0.85rem;">
              <p>• Heart rate</p>
              <p>• GPS location</p>
              <p>• Camera feed</p>
            </div>
          </div>
          <div style="font-size: 3rem; color: #8b5cf6;">→</div>
          <div class="card" style="flex: 1; text-align: center; margin: 0 10px; background: #e9d5ff;">
            <p style="font-size: 2rem; margin: 0;">☁️</p>
            <h3 style="margin: 10px 0;">Edge Functions</h3>
            <p style="font-size: 0.9rem; color: #666;">Data Processing</p>
            <div style="margin-top: 15px; text-align: left; font-size: 0.85rem;">
              <p>• Validation</p>
              <p>• Transform</p>
              <p>• Enrich</p>
            </div>
          </div>
          <div style="font-size: 3rem; color: #f97316;">→</div>
          <div class="card" style="flex: 1; text-align: center; margin: 0 10px; background: #fed7aa;">
            <p style="font-size: 2rem; margin: 0;">🤖</p>
            <h3 style="margin: 10px 0;">AI Analysis</h3>
            <p style="font-size: 0.9rem; color: #666;">ML Inference</p>
            <div style="margin-top: 15px; text-align: left; font-size: 0.85rem;">
              <p>• Detection</p>
              <p>• Prediction</p>
              <p>• Alerts</p>
            </div>
          </div>
          <div style="font-size: 3rem; color: #10b981;">→</div>
          <div class="card" style="flex: 1; text-align: center; margin: 0 10px; background: #d1fae5;">
            <p style="font-size: 2rem; margin: 0;">👥</p>
            <h3 style="margin: 10px 0;">Care Team</h3>
            <p style="font-size: 0.9rem; color: #666;">Real-time Alerts</p>
            <div style="margin-top: 15px; text-align: left; font-size: 0.85rem;">
              <p>• Dashboards</p>
              <p>• Notifications</p>
              <p>• Actions</p>
            </div>
          </div>
        </div>
        <div style="margin-top: 40px; text-align: center;">
          <p style="font-size: 1.1rem;"><strong>⚡ Average End-to-End Latency: &lt;200ms</strong></p>
          <p style="font-size: 1rem; color: #666;">10,000 requests/sec throughput | 99.9% uptime SLA</p>
        </div>
      </div>

      <!-- Slide 6C: Patient Workflow (Activity Diagram) -->
      <div class="slide">
        <h2>Patient Daily Workflow (UML Activity)</h2>
        <div style="max-width: 900px; margin: 0 auto;">
          <div class="card" style="background: #dbeafe; border-left: 8px solid #3b82f6; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">1</div>
              <h3 style="margin: 0;">Morning Routine</h3>
            </div>
            <p style="margin-left: 65px; font-size: 1.1rem;">Wake up → Voice assistant greets → Check vitals → Medication reminder</p>
          </div>
          <p style="text-align: center; font-size: 2.5rem; margin: 20px 0;">↓</p>
          <div class="card" style="background: #ccfbf1; border-left: 8px solid #14b8a6; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: #14b8a6; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">2</div>
              <h3 style="margin: 0;">Navigation & Activities</h3>
            </div>
            <p style="margin-left: 65px; font-size: 1.1rem;">Smart Cane activated → Object detection → Voice navigation → Safe mobility</p>
          </div>
          <p style="text-align: center; font-size: 2.5rem; margin: 20px 0;">↓</p>
          <div class="card" style="background: #e9d5ff; border-left: 8px solid #a855f7; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: #a855f7; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">3</div>
              <h3 style="margin: 0;">Continuous Health Monitoring</h3>
            </div>
            <p style="margin-left: 65px; font-size: 1.1rem;">Vitals tracking → AI anomaly detection → Auto-alert if abnormal</p>
          </div>
          <p style="text-align: center; font-size: 2.5rem; margin: 20px 0;">↓</p>
          <div class="card" style="background: #d1fae5; border-left: 8px solid #10b981;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
              <div style="width: 50px; height: 50px; border-radius: 50%; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">4</div>
              <h3 style="margin: 0;">Evening Routine</h3>
            </div>
            <p style="margin-left: 65px; font-size: 1.1rem;">Final vitals check → Daily summary → Medication log → Sleep tracking</p>
          </div>
        </div>
      </div>

      <!-- Slide 6D: Emergency Response (Sequence Diagram) -->
      <div class="slide">
        <h2>Emergency Response Process (UML Sequence)</h2>
        <p style="margin-bottom: 30px;"><strong>Guaranteed &lt;60 second response time</strong></p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1200px; margin: 0 auto;">
          <div class="card" style="background: #fee2e2; border: 3px solid #dc2626; text-align: center;">
            <p style="font-size: 3rem; margin: 0;">🚨</p>
            <h3 style="color: #991b1b; margin: 15px 0 10px 0;">1. SOS Triggered</h3>
            <p style="font-size: 0.95rem; margin-bottom: 15px; color: #666;">Button press, voice command, or auto-detection</p>
            <div style="background: #fff; padding: 10px; border-radius: 8px; margin-top: 15px;">
              <p style="font-size: 0.85rem; margin: 5px 0;">• Fall detected</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Manual SOS</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Vital anomaly</p>
            </div>
          </div>
          <div class="card" style="background: #fed7aa; border: 3px solid #ea580c; text-align: center;">
            <p style="font-size: 3rem; margin: 0;">🔔</p>
            <h3 style="color: #9a3412; margin: 15px 0 10px 0;">2. Instant Alerts</h3>
            <p style="font-size: 0.95rem; margin-bottom: 15px; color: #666;">Multi-channel notifications (&lt;2 sec)</p>
            <div style="background: #fff; padding: 10px; border-radius: 8px; margin-top: 15px;">
              <p style="font-size: 0.85rem; margin: 5px 0;">• SMS to caretaker</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Push to physician</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Call to nurse</p>
            </div>
          </div>
          <div class="card" style="background: #fef3c7; border: 3px solid #f59e0b; text-align: center;">
            <p style="font-size: 3rem; margin: 0;">📍</p>
            <h3 style="color: #92400e; margin: 15px 0 10px 0;">3. Location Share</h3>
            <p style="font-size: 0.95rem; margin-bottom: 15px; color: #666;">GPS + health data transmitted</p>
            <div style="background: #fff; padding: 10px; border-radius: 8px; margin-top: 15px;">
              <p style="font-size: 0.85rem; margin: 5px 0;">• GPS coordinates</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Current vitals</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Medical history</p>
            </div>
          </div>
          <div class="card" style="background: #d1fae5; border: 3px solid #10b981; text-align: center;">
            <p style="font-size: 3rem; margin: 0;">✅</p>
            <h3 style="color: #047857; margin: 15px 0 10px 0;">4. Response</h3>
            <p style="font-size: 0.95rem; margin-bottom: 15px; color: #666;">Care team responds (&lt;60 sec)</p>
            <div style="background: #fff; padding: 10px; border-radius: 8px; margin-top: 15px;">
              <p style="font-size: 0.85rem; margin: 5px 0;">• Team dispatched</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• 2-way communication</p>
              <p style="font-size: 0.85rem; margin: 5px 0;">• Situation resolved</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 7: Market Opportunity -->
      <div class="slide">
        <h2>Market Opportunity</h2>
        <div style="display: flex; justify-content: space-around; width: 100%; margin: 40px 0;">
          <div class="center">
            <p class="stat">$50B</p>
            <p class="stat-label">Global Assistive<br/>Technology Market</p>
          </div>
          <div class="center">
            <p class="stat">$140B</p>
            <p class="stat-label">Remote Patient<br/>Monitoring Market</p>
          </div>
          <div class="center">
            <p class="stat">2.2B</p>
            <p class="stat-label">People with<br/>Vision Impairment</p>
          </div>
        </div>
        <div class="card" style="margin-top: 40px; max-width: 900px;">
          <h3>Target Market Segments</h3>
          <ul class="list">
            <li>Visually impaired individuals seeking independence</li>
            <li>Elderly patients requiring remote health monitoring</li>
            <li>Healthcare facilities needing care coordination</li>
            <li>Caretakers managing multiple patients</li>
          </ul>
        </div>
      </div>

      <!-- Slide 8: Competitive Advantage -->
      <div class="slide">
        <h2>Why Navilli Wins</h2>
        <div class="list">
          <ul style="max-width: 900px;">
            <li><strong>🎯 Unified Platform:</strong> First solution combining visual assistance with comprehensive healthcare monitoring</li>
            <li><strong>🌍 Global Accessibility:</strong> 24-language support including major Indian languages</li>
            <li><strong>🤖 AI-Driven Intelligence:</strong> Predictive analytics and personalized care recommendations</li>
            <li><strong>👥 Complete Ecosystem:</strong> Connects all stakeholders in the care continuum</li>
            <li><strong>📱 Device Agnostic:</strong> Works with multiple assistive devices and health monitors</li>
            <li><strong>🔒 Healthcare Compliant:</strong> HIPAA-ready architecture with secure data handling</li>
            <li><strong>⚡ Real-Time Everything:</strong> Live monitoring, instant alerts, immediate response</li>
          </ul>
        </div>
      </div>

      <!-- Slide 9: Business Model -->
      <div class="slide">
        <h2>Revenue Model</h2>
        <div class="grid">
          <div class="card">
            <h3>💳 Subscription Tiers</h3>
            <p><strong>Basic:</strong> $29/month - Core features</p>
            <p><strong>Premium:</strong> $79/month - Full platform</p>
            <p><strong>Enterprise:</strong> Custom - Healthcare facilities</p>
          </div>
          <div class="card">
            <h3>🏥 B2B Healthcare</h3>
            <p>Hospital and clinic partnerships</p>
            <p>Volume licensing for care facilities</p>
            <p>White-label opportunities</p>
          </div>
          <div class="card">
            <h3>📱 Device Sales</h3>
            <p>Smart Cane hardware</p>
            <p>Smart Glasses partnerships</p>
            <p>Health monitoring devices</p>
          </div>
          <div class="card">
            <h3>📊 Data & Analytics</h3>
            <p>Anonymized health insights</p>
            <p>Research partnerships</p>
            <p>API access for developers</p>
          </div>
        </div>
      </div>

      <!-- Slide 10: Traction & Roadmap -->
      <div class="slide">
        <h2>Current Status & Roadmap</h2>
        <div class="grid">
          <div class="card">
            <h3>✅ Completed (Phase 1)</h3>
            <ul class="list">
              <li>Full platform MVP developed</li>
              <li>5 role-based dashboards</li>
              <li>24-language voice support</li>
              <li>Device health monitoring</li>
              <li>Location tracking & geo-fencing</li>
              <li>Ride booking integration</li>
            </ul>
          </div>
          <div class="card">
            <h3>🚀 Next 6 Months (Phase 2)</h3>
            <ul class="list">
              <li>Beta testing with 100 users</li>
              <li>Hardware prototype refinement</li>
              <li>Healthcare facility pilots</li>
              <li>FDA/regulatory preparation</li>
              <li>Insurance partnerships</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Slide 11: Team & Investment -->
      <div class="slide">
        <h2>Investment Opportunity</h2>
        <div class="center" style="margin: 40px 0;">
          <p style="font-size: 1.8rem; margin-bottom: 20px;">Seeking <span class="highlight" style="font-size: 2.5rem;">$2M</span> Seed Round</p>
          <p style="font-size: 1.3rem;">To scale platform, complete hardware development, and launch commercial pilots</p>
        </div>
        <div class="grid">
          <div class="card">
            <h3>Use of Funds</h3>
            <ul class="list">
              <li>Product Development: 40%</li>
              <li>Hardware Manufacturing: 25%</li>
              <li>Sales & Marketing: 20%</li>
              <li>Team Expansion: 15%</li>
            </ul>
          </div>
          <div class="card">
            <h3>12-Month Goals</h3>
            <ul class="list">
              <li>1,000+ active users</li>
              <li>5 healthcare partnerships</li>
              <li>Hardware production ready</li>
              <li>$500K ARR</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Slide 12: Impact & Vision -->
      <div class="slide gradient">
        <h2 style="color: white;">Our Vision</h2>
        <p style="font-size: 1.8rem; max-width: 900px; color: white; margin: 30px 0;">
          Empower every person to live independently and receive quality healthcare, 
          regardless of physical limitations or location.
        </p>
        <div style="margin-top: 50px;">
          <p style="font-size: 1.4rem; color: white;"><strong>Join us in transforming healthcare delivery</strong></p>
          <p style="font-size: 1.4rem; color: white;"><strong>and accessibility for millions worldwide.</strong></p>
        </div>
      </div>

      <!-- Slide 13: Contact -->
      <div class="slide">
        <img src="${logo}" alt="Navilli" class="logo" />
        <h2>Let's Connect</h2>
        <div class="center" style="margin-top: 40px;">
          <p style="font-size: 1.5rem; margin: 15px 0;"><strong>Navilli Healthcare Companion</strong></p>
          <p style="font-size: 1.2rem;">Healthcare Innovation for All</p>
          <div style="margin-top: 50px;">
            <span class="badge">contact@navilli.health</span>
            <span class="badge">www.navilli.health</span>
          </div>
          <p style="margin-top: 50px; font-size: 1.1rem; color: #666;">
            Ready to discuss partnership and investment opportunities
          </p>
        </div>
      </div>
    `;
  };

  const slides = [
    // Slide 1: Title
    {
      title: "Title",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white">
          <img src={logo} alt="Navilli" className="h-32 mb-8" />
          <h1 className="text-6xl mb-4">Navilli</h1>
          <p className="text-3xl mb-8">Healthcare Companion</p>
          <p className="text-xl max-w-3xl text-center">
            Unified AI-Powered Healthcare for Visual Assistance & Remote Patient Monitoring
          </p>
          <p className="absolute bottom-8 text-sm opacity-75">Confidential - Product Pitch 2025</p>
        </div>
      )
    },
    // Slide 2: Problem
    {
      title: "Problem",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">The Problem</h2>
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <Eye className="w-8 h-8 text-blue-600" />
                  Visually Impaired Challenges
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>• 285 million people worldwide with visual impairment</li>
                  <li>• Limited independence in daily navigation</li>
                  <li>• Difficulty accessing healthcare services</li>
                  <li>• Fragmented assistive technology solutions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <Heart className="w-8 h-8 text-red-600" />
                  Healthcare Monitoring Gaps
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>• Aging population needs remote monitoring</li>
                  <li>• Hospital readmission rates remain high</li>
                  <li>• Caretaker burden and burnout</li>
                  <li>• Disconnected care coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 3: Solution
    {
      title: "Solution",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-4 text-center">Our Solution: Navilli Healthcare Companion</h2>
          <p className="text-2xl text-center text-muted-foreground mb-12">One Platform. Complete Care.</p>
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="bg-blue-50 dark:bg-blue-950">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Visual Assistance
                </h3>
                <p>AI-powered object detection, navigation, and 24-language voice guidance through Smart Cane and Smart Glasses</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 dark:bg-red-950">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Remote Monitoring
                </h3>
                <p>Real-time vital signs tracking, medication management, and emergency response system</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Accessible Transportation
                </h3>
                <p>Integrated ride booking with voice-guided pickup and wheelchair-accessible options</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 dark:bg-purple-950">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Care Coordination
                </h3>
                <p>Unified platform connecting patients, caretakers, physicians, nurses, and AI analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 4: Key Features
    {
      title: "Features",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Platform Capabilities</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Smart Device Integration:</strong> Cane, Glasses, Health Monitors, GPS Trackers
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>AI Voice Assistant:</strong> 24 languages including Telugu, Tamil, Kannada, Malayalam
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Real-Time Health Monitoring:</strong> Heart rate, BP, O2, temperature tracking
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Emergency SOS System:</strong> Instant alerts to caretakers and medical staff
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Geo-Fencing & Tracking:</strong> Location monitoring with smart alerts
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Device Health Monitoring:</strong> Battery, connectivity, and diagnostics
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Medication Management:</strong> Reminders and adherence tracking
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Care Team Coordination:</strong> Role-based dashboards for all stakeholders
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: User Roles
    {
      title: "Roles",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Role-Based Dashboards</h2>
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">👤 Patient Portal</h3>
                <p>Voice assistance, health monitoring, ride booking, emergency SOS</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">❤️ Caretaker Dashboard</h3>
                <p>Patient monitoring, location tracking, task management, alerts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">⚕️ Physician Dashboard</h3>
                <p>Patient records, vitals review, prescription management, analytics</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">👩‍⚕️ Nurse Dashboard</h3>
                <p>Medication rounds, vital checks, care tasks, patient communication</p>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">🤖 AI Admin Dashboard</h3>
                <p>System analytics, staff management, device fleet monitoring, predictive insights, onboarding workflows</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 6: Technology
    {
      title: "Technology",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Technology & Architecture</h2>
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  Frontend
                </h3>
                <ul className="space-y-2">
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Real-time UI updates</li>
                  <li>• Responsive design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Backend
                </h3>
                <ul className="space-y-2">
                  <li>• Supabase (PostgreSQL)</li>
                  <li>• Edge Functions (Hono)</li>
                  <li>• Real-time data sync</li>
                  <li>• Secure authentication</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  AI & ML
                </h3>
                <ul className="space-y-2">
                  <li>• Computer vision for objects</li>
                  <li>• NLP (24 languages)</li>
                  <li>• Predictive health analytics</li>
                  <li>• Voice recognition</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  IoT Integration
                </h3>
                <ul className="space-y-2">
                  <li>• Smart Cane sensors</li>
                  <li>• Smart Glasses camera</li>
                  <li>• Wearable health devices</li>
                  <li>• GPS tracking modules</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 7: UML System Architecture
    {
      title: "Architecture",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-6 text-center">System Architecture (UML)</h2>
          <p className="text-center text-xl text-muted-foreground mb-8">Three-Tier Scalable Architecture</p>
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Presentation Layer */}
            <Card className="bg-blue-50 dark:bg-blue-950 border-2 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-blue-600">Layer 1: Presentation (Frontend)</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>React + TypeScript</strong></p>
                    <p className="text-sm text-muted-foreground">UI Framework</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>Tailwind CSS</strong></p>
                    <p className="text-sm text-muted-foreground">Styling</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>5 Role Dashboards</strong></p>
                    <p className="text-sm text-muted-foreground">Patient to Admin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-purple-600" />
            </div>
            {/* Application Layer */}
            <Card className="bg-purple-50 dark:bg-purple-950 border-2 border-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-6 h-6 text-purple-600" />
                  <h3 className="text-purple-600">Layer 2: Application (Backend)</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <strong>Supabase Edge</strong>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <strong>Hono Server</strong>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <strong>AI/ML Engine</strong>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-center">
                    <strong>RESTful API</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-green-600" />
            </div>
            {/* Data Layer */}
            <Card className="bg-green-50 dark:bg-green-950 border-2 border-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-6 h-6 text-green-600" />
                  <h3 className="text-green-600">Layer 3: Data (Storage)</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>PostgreSQL</strong></p>
                    <p className="text-sm text-muted-foreground">Primary DB</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>KV Store</strong></p>
                    <p className="text-sm text-muted-foreground">Fast Cache</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                    <p><strong>Blob Storage</strong></p>
                    <p className="text-sm text-muted-foreground">Files & Media</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <p className="text-3xl">⚡</p>
                <p><strong>&lt;200ms</strong></p>
                <p className="text-sm text-muted-foreground">Avg Latency</p>
              </div>
              <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <p className="text-3xl">🔒</p>
                <p><strong>AES-256</strong></p>
                <p className="text-sm text-muted-foreground">Encryption</p>
              </div>
              <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <p className="text-3xl">📊</p>
                <p><strong>99.9%</strong></p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Data Flow Sequence
    {
      title: "Data Flow",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-6 text-center">Real-Time Data Flow (UML Sequence)</h2>
          <p className="text-center text-xl text-muted-foreground mb-8">From IoT devices to care team dashboards</p>
          <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
            <Card className="flex-1 bg-blue-50 dark:bg-blue-950">
              <CardContent className="p-4 text-center">
                <Smartphone className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h3>IoT Devices</h3>
                <p className="text-sm text-muted-foreground">Sensors & Wearables</p>
                <div className="mt-3 text-sm space-y-1">
                  <p>• Heart rate</p>
                  <p>• GPS location</p>
                  <p>• Camera feed</p>
                </div>
              </CardContent>
            </Card>
            <ArrowRight className="w-8 h-8 text-purple-600 flex-shrink-0" />
            <Card className="flex-1 bg-purple-50 dark:bg-purple-950">
              <CardContent className="p-4 text-center">
                <Cloud className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <h3>Edge Functions</h3>
                <p className="text-sm text-muted-foreground">Data Processing</p>
                <div className="mt-3 text-sm space-y-1">
                  <p>• Validation</p>
                  <p>• Transform</p>
                  <p>• Enrich</p>
                </div>
              </CardContent>
            </Card>
            <ArrowRight className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <Card className="flex-1 bg-orange-50 dark:bg-orange-950">
              <CardContent className="p-4 text-center">
                <Brain className="w-12 h-12 mx-auto mb-3 text-orange-600" />
                <h3>AI Analysis</h3>
                <p className="text-sm text-muted-foreground">ML Inference</p>
                <div className="mt-3 text-sm space-y-1">
                  <p>• Detection</p>
                  <p>• Prediction</p>
                  <p>• Alerts</p>
                </div>
              </CardContent>
            </Card>
            <ArrowRight className="w-8 h-8 text-green-600 flex-shrink-0" />
            <Card className="flex-1 bg-green-50 dark:bg-green-950">
              <CardContent className="p-4 text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <h3>Care Team</h3>
                <p className="text-sm text-muted-foreground">Real-time Alerts</p>
                <div className="mt-3 text-sm space-y-1">
                  <p>• Dashboards</p>
                  <p>• Notifications</p>
                  <p>• Actions</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg"><strong>⚡ Average End-to-End Latency: &lt;200ms</strong></p>
            <p className="text-muted-foreground">10,000 requests/sec throughput | 99.9% uptime SLA</p>
          </div>
        </div>
      )
    },
    // Slide 9: Patient Workflow
    {
      title: "Workflow",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-8 text-center">Patient Daily Workflow (UML Activity)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-blue-50 dark:bg-blue-950 border-l-8 border-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl shrink-0">1</div>
                  <h3>Morning Routine</h3>
                </div>
                <p className="ml-16 text-lg">Wake up → Voice assistant → Check vitals → Medication reminder</p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-blue-600" />
            </div>
            <Card className="bg-cyan-50 dark:bg-cyan-950 border-l-8 border-cyan-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl shrink-0">2</div>
                  <h3>Navigation & Activities</h3>
                </div>
                <p className="ml-16 text-lg">Smart Cane activated → Object detection → Voice navigation</p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-cyan-600" />
            </div>
            <Card className="bg-purple-50 dark:bg-purple-950 border-l-8 border-purple-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl shrink-0">3</div>
                  <h3>Continuous Monitoring</h3>
                </div>
                <p className="ml-16 text-lg">Vitals tracking → AI detection → Auto-alert if abnormal</p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-purple-600" />
            </div>
            <Card className="bg-green-50 dark:bg-green-950 border-l-8 border-green-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl shrink-0">4</div>
                  <h3>Evening Routine</h3>
                </div>
                <p className="ml-16 text-lg">Final vitals → Daily summary → Medication log → Sleep tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 10: Emergency Response
    {
      title: "Emergency",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-6 text-center">Emergency Response (UML Sequence)</h2>
          <p className="text-center text-xl text-muted-foreground mb-8"><strong>Guaranteed &lt;60 second response time</strong></p>
          <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="bg-red-50 dark:bg-red-950 border-2 border-red-500">
              <CardContent className="p-4 text-center">
                <AlertCircle className="w-16 h-16 mx-auto mb-3 text-red-600" />
                <h3 className="text-red-900 dark:text-red-100 mb-2">1. SOS Triggered</h3>
                <p className="text-sm text-muted-foreground mb-3">Button, voice, or auto-detection</p>
                <div className="space-y-1 text-sm">
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Fall detected</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Manual SOS</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Vital anomaly</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 dark:bg-orange-950 border-2 border-orange-500">
              <CardContent className="p-4 text-center">
                <Bell className="w-16 h-16 mx-auto mb-3 text-orange-600" />
                <h3 className="text-orange-900 dark:text-orange-100 mb-2">2. Instant Alerts</h3>
                <p className="text-sm text-muted-foreground mb-3">Multi-channel (&lt;2 sec)</p>
                <div className="space-y-1 text-sm">
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">SMS to caretaker</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Push to physician</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Call to nurse</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-500">
              <CardContent className="p-4 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-3 text-yellow-600" />
                <h3 className="text-yellow-900 dark:text-yellow-100 mb-2">3. Location Share</h3>
                <p className="text-sm text-muted-foreground mb-3">GPS + health data</p>
                <div className="space-y-1 text-sm">
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">GPS coordinates</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Current vitals</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Medical history</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950 border-2 border-green-500">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-3 text-green-600" />
                <h3 className="text-green-900 dark:text-green-100 mb-2">4. Response</h3>
                <p className="text-sm text-muted-foreground mb-3">Team responds (&lt;60 sec)</p>
                <div className="space-y-1 text-sm">
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Team dispatched</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">2-way communication</p>
                  <p className="bg-white dark:bg-gray-800 p-2 rounded">Situation resolved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 11: Market
    {
      title: "Market",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Market Opportunity</h2>
          <div className="flex justify-around max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <p className="text-6xl mb-4">$50B</p>
              <p className="text-xl text-muted-foreground">Global Assistive<br/>Technology Market</p>
            </div>
            <div className="text-center">
              <p className="text-6xl mb-4">$140B</p>
              <p className="text-xl text-muted-foreground">Remote Patient<br/>Monitoring Market</p>
            </div>
            <div className="text-center">
              <p className="text-6xl mb-4">2.2B</p>
              <p className="text-xl text-muted-foreground">People with<br/>Vision Impairment</p>
            </div>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Target Market Segments</h3>
              <ul className="space-y-3 text-lg">
                <li>• Visually impaired individuals seeking independence</li>
                <li>• Elderly patients requiring remote health monitoring</li>
                <li>• Healthcare facilities needing care coordination</li>
                <li>• Caretakers managing multiple patients</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    // Slide 8: Competitive Advantage
    {
      title: "Advantage",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Why Navilli Wins</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-xl">Unified Platform:</strong>
                  <p className="text-lg mt-2">First solution combining visual assistance with comprehensive healthcare monitoring</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Globe className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-xl">Global Accessibility:</strong>
                  <p className="text-lg mt-2">24-language support including major Indian languages</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Brain className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-xl">AI-Driven Intelligence:</strong>
                  <p className="text-lg mt-2">Predictive analytics and personalized care recommendations</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Users className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-xl">Complete Ecosystem:</strong>
                  <p className="text-lg mt-2">Connects all stakeholders in the care continuum</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 9: Business Model
    {
      title: "Business",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Revenue Model</h2>
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  Subscription Tiers
                </h3>
                <div className="space-y-3">
                  <p><strong>Basic:</strong> $29/month - Core features</p>
                  <p><strong>Premium:</strong> $79/month - Full platform</p>
                  <p><strong>Enterprise:</strong> Custom - Healthcare facilities</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-600" />
                  B2B Healthcare
                </h3>
                <ul className="space-y-2">
                  <li>• Hospital and clinic partnerships</li>
                  <li>• Volume licensing for care facilities</li>
                  <li>• White-label opportunities</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  Device Sales
                </h3>
                <ul className="space-y-2">
                  <li>• Smart Cane hardware</li>
                  <li>• Smart Glasses partnerships</li>
                  <li>• Health monitoring devices</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  Data & Analytics
                </h3>
                <ul className="space-y-2">
                  <li>• Anonymized health insights</li>
                  <li>• Research partnerships</li>
                  <li>• API access for developers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 10: Roadmap
    {
      title: "Roadmap",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Current Status & Roadmap</h2>
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-green-50 dark:bg-green-950">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Completed (Phase 1)
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>✅ Full platform MVP developed</li>
                  <li>✅ 5 role-based dashboards</li>
                  <li>✅ 24-language voice support</li>
                  <li>✅ Device health monitoring</li>
                  <li>✅ Location tracking & geo-fencing</li>
                  <li>✅ Ride booking integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-950">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                  Next 6 Months (Phase 2)
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>🚀 Beta testing with 100 users</li>
                  <li>🚀 Hardware prototype refinement</li>
                  <li>🚀 Healthcare facility pilots</li>
                  <li>🚀 FDA/regulatory preparation</li>
                  <li>🚀 Insurance partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 11: Investment
    {
      title: "Investment",
      content: (
        <div className="p-12">
          <h2 className="text-4xl mb-12 text-center">Investment Opportunity</h2>
          <div className="text-center mb-12">
            <p className="text-2xl mb-4">Seeking</p>
            <p className="text-7xl mb-6">$2M</p>
            <p className="text-2xl text-muted-foreground">Seed Round</p>
            <p className="text-xl mt-6 max-w-3xl mx-auto">
              To scale platform, complete hardware development, and launch commercial pilots
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Use of Funds</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span>Product Development</span>
                    <strong>40%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardware Manufacturing</span>
                    <strong>25%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales & Marketing</span>
                    <strong>20%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Expansion</span>
                    <strong>15%</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">12-Month Goals</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    1,000+ active users
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    5 healthcare partnerships
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Hardware production ready
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    $500K ARR
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 12: Vision
    {
      title: "Vision",
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white p-12">
          <h2 className="text-5xl mb-12 text-center">Our Vision</h2>
          <p className="text-2xl max-w-4xl text-center mb-16 leading-relaxed">
            Empower every person to live independently and receive quality healthcare, 
            regardless of physical limitations or location.
          </p>
          <div className="text-center">
            <p className="text-xl mb-4"><strong>Join us in transforming healthcare delivery</strong></p>
            <p className="text-xl"><strong>and accessibility for millions worldwide.</strong></p>
          </div>
        </div>
      )
    },
    // Slide 13: Contact
    {
      title: "Contact",
      content: (
        <div className="flex flex-col items-center justify-center h-full p-12">
          <img src={logo} alt="Navilli" className="h-32 mb-8" />
          <h2 className="text-5xl mb-12">Let's Connect</h2>
          <div className="text-center space-y-6">
            <p className="text-2xl"><strong>Navilli Healthcare Companion</strong></p>
            <p className="text-xl text-muted-foreground">Healthcare Innovation for All</p>
            <div className="flex gap-4 mt-8 justify-center">
              <Badge className="text-lg px-6 py-3 bg-blue-600">contact@navilli.health</Badge>
              <Badge className="text-lg px-6 py-3 bg-purple-600">www.navilli.health</Badge>
            </div>
            <p className="text-lg text-muted-foreground mt-12">
              Ready to discuss partnership and investment opportunities
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="size-full bg-background relative">
      {/* Print Instructions */}
      <div className="print:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
        <p className="text-sm">Download as <strong>PDF</strong> or <strong>PowerPoint</strong> using the Download button</p>
      </div>

      {/* Navigation Controls */}
      <div className="print:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        <Button onClick={prevSlide} variant="outline" size="lg">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="bg-card px-6 py-3 rounded-lg shadow-lg border border-border">
          <p className="font-medium">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
        <Button onClick={nextSlide} variant="outline" size="lg">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleDownloadPDF}>
              <FileText className="w-4 h-4 mr-2" />
              Download as PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDownloadPPT}>
              <Presentation className="w-4 h-4 mr-2" />
              Download as PowerPoint
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={handlePrint} variant="outline" size="lg">
          <Printer className="w-5 h-5 mr-2" />
          Print
        </Button>
      </div>

      {/* Current Slide Display */}
      <div className="print:hidden h-screen overflow-hidden">
        {slides[currentSlide].content}
      </div>

      {/* Print Version - All Slides */}
      <div className="hidden print:block">
        {slides.map((slide, index) => (
          <div key={index} className="h-screen w-full page-break-after">
            {slide.content}
          </div>
        ))}
      </div>

      {/* Slide Thumbnails */}
      <div className="print:hidden fixed left-4 top-20 z-50 w-48 max-h-[calc(100vh-120px)] overflow-y-auto bg-card rounded-lg shadow-lg border border-border p-2 space-y-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-full text-left p-3 rounded transition-colors ${
              currentSlide === index
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <p className="text-sm">
              {index + 1}. {slide.title}
            </p>
          </button>
        ))}
      </div>

      <style>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }
          .page-break-after {
            page-break-after: always;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
