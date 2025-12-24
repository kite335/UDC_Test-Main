import { createContext, useState } from "react";
import crmIcon from "../assets/SidebarSvg/crm.svg";
import collabIcon from "../assets/SidebarSvg/collaboration.svg";
import task_projectIcon from "../assets/SidebarSvg/taskProjects.svg";
import site_storeIcon from "../assets/SidebarSvg/siteStore.svg";
import hr_automationIcon from "../assets/SidebarSvg/hr.svg";
import copilotIcon from "../assets/SidebarSvg/copilot.svg";
import leadImg from "../assets/option/lead-management.png";
import salesImg from "../assets/option/sales.png";

export const CommonDataContext = createContext({
  megaDataStatus: null,
});

// MEGA DATA//////////////////////////////////////////////////////////////////////////////////////////////

const side_1 = {
  page_1: {
    h: "Sales management",
    p: "Bitrix24 sales management software is designed to help your team achieve better results in almost every aspect of their work. As a result, you get more clients and sales faster and easier.",
    i: salesImg,

    h1: "Lead management",
    p1: "The process of working with leads in the Bitrix24 lead management software starts with acquisition, continues with scoring followed by nurturing, and ends with a lead being converted into a deal.",
    i1: leadImg,

    l1: "Customizable web forms",
    l2: "Bulk email and SMS campaigns",
    l3: "Ad campaigns on Facebook, Instagram, Google",
    l4: "Rule-based lead qualification",

    c1h: "Collect leads from multiple sources",
    c1p: "Bitrix24 is a complete sales lead management platform that features multiple tools for acquiring leads: web forms, email, telephony, ad campaigns on Google and Facebook, and more.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/lead-management-card-1.png.webp?1764863685915",
    c2h: "Nurture your leads via every possible channel",
    c2p: "With the Bitrix24 free sales management software, any submitted web form, email, phone call, or message/comment on social media can be turned into a lead and added to your CRM.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/lead-management-card-2.png.webp?1764863685915",
    c3h: "Convert anything into a lead",
    c3p: "Reach out to your leads via email, phone call, voice broadcasting, SMS, social media, messengers – all from a single lead management sales dashboard in Bitrix24.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/lead-management-card-3.png.webp?1764863685915",

    h2: "Deal management",
    p2: "Bitrix24 sales management CRM is not so much about managing deals as it is about winning them. From the moment you've added that deal to the moment you close it, our deal management software helps you every step of the way.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/deal-management.png.webp?1764863685915",
    l5: "Kanban board or list view",
    l6: "Estimates & invoices",
    l7: "Automation rules & triggers",
    l8: "Built-in e-signature tool",
    l9: "Access permissions & roles",

    c4h: "Kanban view for deals",
    c4p: "One quick look at our Kanban board is enough to understand what a deal status is. Set up your own, custom sales pipeline with stages that are specific to your line of business",
    c4i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/deal-management-card-1.png.webp?1764863685915",
    c5h: "Estimates & invoices",
    c5p: "Create and upload your own, custom templates. Generate an estimate or an invoice in just one click right from a CRM deal and send it to the client via email or SMS.",
    c5i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/deal-management-card-2.png.webp?1764863685915",
    c6h: "Automation rules & triggers",
    c6p: "Choose from a variety of pre-configured rules and triggers to help your sales reps do their job more efficiently: send client reminders, employee alerts, notifications, and more.",
    c6i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/deal-management-card-3.png.webp?1764863685915",

    h3: "Contact management",
    p3: "Navigate easily through your CRM records and find the right customer data within a few clicks. Configure access rights for CRM fields when you want to make certain fields invisible for specific users.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/contact-management.png.webp?1764863685915",

    l10: "Customer profile",
    l11: "Deals and leads linked to a client",
    l12: "Full client interaction history",
    l13: "mport/export contacts in one click",
    l14:"Duplicate control",

    c7h: "Custom fields",
    c7p: "You can create and add custom fields to have your contacts feature additional information that is required in your line of business.",
    c7i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/contact-management-card-1.png.webp?1764863685915",
    c8h: "Easy client communication",
    c8p: "Choose the most convenient way to reach out to a client (email, phone, SMS, video call, messenger, etc.) and do it in one click from your Bitrix24 sales contact management software.",
    c8i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/contact-management-card-2.png.webp?1764863685915",

    c9h: "Link deals, contacts, and companies",
    c9p: "In addition to the standard option (one contact is linked to one company and one deal), you can also have one deal linked to several contacts or one contact – to several companies.",
    c9i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/contact-management-card-3.png.webp?1764863685915",

    h4: "Pipelines",
    p4: "Follow your deals all the way from creation to completion using our pipeline management CRM. Customize deal stages to fit your sales process, create automation rules to move deals faster, connect several related pipelines into a sales tunnel for easier sales management.",
    i4: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/pipelines.png.webp?1764863685915",

    l15: "Kanban board",
    l16: "Custom deal stages",
    l17: "Pipeline automation",
    l18: "Multiple pipelines",
    

    c10h: "Fully adaptable to your business",
    c10p: "In addition to creating custom pipeline management stages, you can also have a custom deal view. Depending on which pipeline a deal is in, it will feature different fields.",
    c10i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/pipelines-card-1.png.webp?1764863685915",

    c11h: "Automation rules & triggers",
    c11p: "Based on the changes in the deal itself, it can be set to automatically move to a designated pipeline stage – all done inside the Bitrix24 pipeline management software.",
    c11i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/pipelines-card-2.png.webp?1764863685915",

    c12h: "Sales tunnels",
    c12p: "If you have a rather complicated, multi-stage sales process, it makes sense to split it into several pipelines that can be connected and managed via sales tunnels.",
    c12i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/pipelines-card-3.png.webp?1764863685915",

    h5: "Access permissions & roles",
    p5: "When your sales process features several distinct stages (each handled by a different person), it often makes sense to limit their access to particular fields and sections – and the Bitrix24 sales management system gives you just that.",
    i5: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/access-permissions.png.webp?1764863685915",

    l19: "CRM roles",
    l20: "Granular level access permissions",
    l21: "Custom deal view",
    l22: "Custom fields in deals",

    c13h: "CRM roles",
    c13p: "Based on the number of departments and complexity of the sales process in your organization, you can create multiple roles with custom access permissions in the Bitrix24 CRM for sales management.",
    c13i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/access-permissions-card-1.png.webp?1764863685915",

    c14h: "Access permissions",
    c14p: "Using our sales management tool, you can decide whether a user can view, edit, delete, or import/export a particular deal by setting the appropriate access permissions for them.",
    c14i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/access-permissions-card-2.png.webp?1764863685915",

    c15h: "Custom fields",
    c15p: "Feel like our standard fields in deals aren't enough for your company? Add a bunch of custom ones to make them reflect your line of business and work with clients easier.",
    c15i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-management/access-permissions-card-3.png.webp?1764863685915",
  },
  page_2:{
    h: "Contact Center",
    p: "Whether you're communicating with your customers, launching marketing campaigns, or acquiring new leads, it's always nice to have a choice of how you do that – and Bitrix24 omnichannel CRM software gives you that choice.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/header-human-contact-center.png.webp?1764863685915",

    h1: "CRM forms",
    p1: "Pick an existing template or create a completely custom CRM form, using our web form builder. Integrated with our multi channel CRM and other Bitrix24 tools, this is the ultimate lead generation machine for your business.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/crm-forms.png.webp?1764863685915",

    l1: "Callback forms",
    l2: "Feedback forms",
    l3: "Self-registration forms",
    l4: "Custom forms",

    c1h: "Create unlimited forms",
    c1p: "Most popular forms already exist inside Bitrix24 as ready-made templates – just pick the one you like, add/remove fields, and embed it onto your website.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/crm-forms-card-1.png.webp?1764863685915",
    c2h: "Fully customizable",
    c2p: "Using our visual block-based editor, you can create a completely custom CRM form (fields, size, color, fonts, images, buttons, and more).",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/crm-forms-card-2.png.webp?1764863685915",
    c3h: "Integrated with CRM",
    c3p: "All of our forms are integrated with CRM and website builder by default, which means you can have a lead, contact, or deal automatically created every time a form is submitted.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/crm-forms-card-3.png.webp?1764863685915",

    h2: "Website widget",
    p2: "Bitrix24 website widget is a great way to facilitate communication with your website visitors. Integrated with our CRM and site builder tools, it brings together various digital communication channels, including live chat, CRM forms, and a callback option.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/website-widget.png.webp?1764863685915",
    l5: "Fully customizable",
    l6: "Integrated with CRM",
    l7: "Automation rules & triggers",
    l8: "Integrated with website builder",
    l9: "Omnichannel software",

    c4h: "Customizable website widget",
    c4p: "You can add, remove, and combine different elements to create an omnichannel chat. These elements include a CRM form, callback option, auto-welcome message, and more. You can also set the widget to appear during specific hours and on specific pages.",
    c4i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/website-widget-card-1.png.webp?1764863685915",
    c5h: "Integration with Contact center",
    c5p: "Don't limit your site visitors to just a live chat – you add more communication tools to your widget, including WhatsApp, Telegram, Instagram Direct, etc. and handle all client communication from a single omnichannel platform in your Bitrix24.",
    c5i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/website-widget-card-2.png.webp?1764863685915",
    c6h: "CRM integration",
    c6p: "Every site visitor is a potential lead or even a deal. Thanks to the integration with our CRM, any submitted form, incoming call, message, or request can be automatically turned into a new lead/deal or added to an existing one.",
    c6i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/website-widget-card-3.png.webp?1764863685915",

    h3: "Live chat",
    p3: "Live chat is an essential tool that allows you to quickly and efficiently manage communication with your site visitors, do online sales consultations, and handle customer service requests.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/live-chat.png.webp?1764863685915",

    l10: "Omnichannel customer service",
    l11: "Custom settings",
    l12: "Integrated with CRM and Contact Center",
    l13: "Chatbot integrations",
    l14:"live chat enhancement using  AI ",

    c7h: "Wide range of customization options",
    c7p: "Almost every parameter of our live chat can be customized, including color scheme, placement on the website, welcome/unavailable messages, access permissions, and more.",
    c7i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/live-chat-card-1.png.webp?1764863685915",
    c8h: "Integrated with CRM and Contact Center",
    c8p: "All the messages you receive via live chat are processed inside a single dashboard called Contact Center. Also, you can set the system to automatically create a lead/deal based on an incoming live chat message.",
    c8i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/live-chat-card-2.png.webp?1764863685915",

    c9h: "Third-party chatbot solutions from Bitrix24 Market",
    c9p: "Our live chat can be easily enhanced with some serious AI capabilities by installing third-party chatbot solutions from Bitrix24 Market to provide quality omnichannel support to your clients.",
    c9i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/live-chat-card-3.png.webp?1764863685915",

    h4: "WhatsApp & Telegram",
    p4: "Connect your WhatsApp and Telegram accounts to Bitrix24 and start communicating with your clients directly from our Contact Center. Add new leads and deals to your CRM automatically based on incoming messages.",
    i4: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/whatsapp-telegram.png.webp?1764863685915",

    l15: "Official integration",
    l16: "Supports Instant WhatsApp",
    l17: "Ideal for omnichannel e-commerce",
    l18: "Seamless lead generation",
    

    c10h: "Integration with WhatsApp",
    c10p: "Start receiving messages from your clients directly to Bitrix24 Contact Center without using your own WhatsApp or getting their business account. It's convenient for both customers (to them, it looks like a regular WhatsApp chat) and you (no need to switch back and forth between apps).",
    c10i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/whatsapp-telegram-card-1.png.webp?1764863685915",

    c11h: "Integration with Telegram",
    c11p: "When you connect your Telegram account to Bitrix24, every chat becomes a potential deal in CRM, complete with the client's name, phone number, and chat history. All of the incoming messages are handled by your sales reps from a single dashboard inside Bitrix24.",
    c11i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/whatsapp-telegram-card-2.png.webp?1764863685915",

    c12h: "More than just communication",
    c12p: "When a customer is willing to make a purchase, just pick the product from your catalog and generate a payment link so that the customer could easily pay online. The whole conversation is saved to the respective CRM deal.",
    c12i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/whatsapp-telegram-card-3.png.webp?1764863685915",

    h5: "Instagram Direct",
    p5: "Thanks to our integration with Instagram, you can provide a native shopping experience to your customers, managing all the interactions (including payments) directly inside Bitrix24.",
    i5: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/instagram-direct.png.webp?1764863685915",

    l19: "Official Instagram integration",
    l20: "Integrated with Contact Center",
    l21: "Ideal for omnichannel sales",
    l22: "Integrated with payments",

    c13h: "Official integration",
    c13p: "Connect your Instagram profile with just a few clicks and start scaling your business across Instagram like you never could before.",
    c13i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/instagram-direct-card-1.png.webp?1764863685915",

    c14h: "Smooth shopping experience",
    c14p: "Customers can shop your products, make orders, and pay for them without leaving the app – all inside Instagram.",
    c14i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/instagram-direct-card-2.png.webp?1764863685915",

    c15h: "Smooth sales experience",
    c15p: "Manage the whole sales process inside the Bitrix24 CRM: reply to DMs, share product images, and send payment links.",
    c15i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/contact-center/instagram-direct-card-3.png.webp?1764863685915",
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////


const DataContextProvider = ({ children }) => {
  //  SIDEBAR LIST
  const sidebarData = [
    { listItem: "CRM", icon: crmIcon },
    { listItem: "COLLABORATION", icon: collabIcon },
    { listItem: "TASK & PROJECT", icon: task_projectIcon },
    { listItem: "SITE & STORE", icon: site_storeIcon },
    { listItem: "HR & AUTOMATION", icon: hr_automationIcon },
    { listItem: "COPILOT", icon: copilotIcon },
  ];

  // MEGA PANEL

  const dropdown = {
    crm: {
      panel: {
        topicIcon: crmIcon,
        topicHeading: "CRM",
        topicTagLine: "Manage sales and clients effortlessly",
        navigateTo: "/bitrix24-crm",
        topicContent: [
          {
            contentHeading: "Sales management",
            navigateTo: "/sales-management",
            des: "Manage leads, deals, contacts, pipelines, access permissions & roles",
          },
          {
            contentHeading: "Contact center",
            navigateTo: "/contact-center",
            des: "Omnichannel communications via CRM forms, website widget, live chat, WhatsApp, Instagram, telephony, email",
          },
          {
            contentHeading: "Sales team collaboration",
            navigateTo: "/sales-collaboration",
            des: "Work with chat, video calls, tasks, calendar, file storage, online documents",
          },
          {
            contentHeading: "Sales enablement",
            navigateTo: "/sales-enablement",
            des: "Get estimates, invoices, payments, catalog, inventory, e-signature, CRM store",
          },
          {
            contentHeading: "Analytics & reports",
            navigateTo: "/analytics-reports",
            des: "Analyze sales funnel, employee performance, Sales Intelligence, BI Builder dashboards",
          },
          {
            contentHeading: "Mobile CRM",
            navigateTo: "/mobile-crm",
            des: "Leads, deals, invoices, payments, telephony, emails, inventory, calendar at your fingertips",
          },
          {
            contentHeading: "Marketing",
            navigateTo: "/marketing",
            des: "Use email campaigns, social media ads, SMS, telemarketing, landing pages",
          },
          {
            contentHeading: "Automation & integrations",
            navigateTo: "/automation-integrations",
            des: "Set CRM rules and triggers, workflow automation, automated funnels, API",
          },
          {
            contentHeading: "CoPilot in CRM",
            navigateTo: "/coPilot-crm",
            des: "Call audio-to-text transcription, call summary, field autocompletion in deals",
          },
        ],
      },
    },

    collab: {
      panel: {
        topicIcon: collabIcon,
        topicHeading: "Collaboration",
        topicTagLine: "Power up your teamwork",
        navigateTo: "/social-intranet",

        topicContent: [
          {
            contentHeading: "Online workspace",
            des: "Use chat, activity feed, comments, reactions, company-wide video announcements",
          },
          {
            contentHeading: "Online documents & file storage",
            des: "Store, share and edit documents online easily with co-workers using company drive",
          },
          {
            contentHeading: "Workgroups",
            des: "Create workgroups, invite external users, set access permissions and work on tasks and projects",
          },
          {
            contentHeading: "Online meetings",
            des: "Do more with video calls, video conferencing, screen sharing, call recording and custom backgrounds",
          },
          {
            contentHeading: "Shared Calenders",
            des: "Plan with company & personal calendar, open time slots, meeting room booking, calendar sync",
          },
          {
            contentHeading: "Mobile communications",
            des: "Team messenger, video calls, comments, calendar, notifications anywhere",
          },
          {
            contentHeading: "CoPilot in Chat",
            des: "Unlimited source of ideas, AI-generated texts, brainstorming, and more",
          },
        ],
      },
    },

    taskProjects: {
      panel: {
        topicIcon: task_projectIcon,
        topicHeading: "Tasks & Projects",
        topicTagLine: "Get work done easier & faster",
        navigateTo: "/task-projects",

        topicContent: [
          {
            contentHeading: "Task management",
            des: "Choose between Kanban board, Gantt chart, Scrum, task list",
          },
          {
            contentHeading: "Task tracking",
            des: "Take advantage of checklists & sub-tasks, task summary, time tracking, focus & supervisor mode",
          },
          {
            contentHeading: "API & integrations",
            des: "Connect your tasks to other services via API integration for advanced task automation",
          },
          {
            contentHeading: "Project management",
            des: "Use projects, workgroups, project planning, roles, access permissions",
          },
          {
            contentHeading: "Employee performance",
            des: "Get productive with task reports, workload management, task efficiency & KPI",
          },
          {
            contentHeading: "Mobile tasks",
            des: "Task creation, task tracking, notifications, comments, chat on the go",
          },
          {
            contentHeading: "Project collaboration",
            des: "Work faster with chat, video calls, comments, file storage, documents, external users, task templates",
          },
          {
            contentHeading: "Automation",
            des: "Save time with automatic task creation and workflow automation",
          },
          {
            contentHeading: "CoPilot in Tasks",
            des: "AI-generated task descriptions, task summaries, checklists, comments",
          },
        ],
      },
    },

    siteStore: {
      panel: {
        topicIcon: site_storeIcon,
        topicHeading: "Sites & Stores",
        topicTagLine: "Create websites that sell",
        navigateTo: "/sites",

        topicContent: [
          {
            contentHeading: "Website builder",
            des: "Use our free CMS, templates, hosting, AI-generated images and texts to create awesome sites",
          },
          {
            contentHeading: "Social selling",
            des: "Sell your products directly via Facebook, Instagram, WhatsApp or Telegram",
          },
          {
            contentHeading: "Website forms",
            des: "Capture leads with custom order forms, registration & feedback forms, and forms with conditional fields",
          },
          {
            contentHeading: "Landing pages",
            des: "Generate leads with capture forms, automated funnels and Google Analytics integration",
          },
          {
            contentHeading: "Online store",
            des: "Maximize ecommerce with inventory management, order processing, delivery and online payments",
          },
          {
            contentHeading: "Mobile sites & online stores",
            des: "Responsive design, online orders, client management in your pocket",
          },
          {
            contentHeading: "Website widget",
            des: "Enable widget to chat with site visitors, use popular messengers and accept callback requests",
          },
          {
            contentHeading: "Online marketing tools",
            des: "Increase sales with email marketing, Facebook or Google Ads, marketing automation, CRM integration",
          },
          {
            contentHeading: "CoPilot in Sites & Stores",
            des: "Compelling copy on demand, AI-generated images, detailed prompts, text translation",
          },
        ],
      },
    },

    hrAutomation: {
      panel: {
        topicIcon: hr_automationIcon,
        topicHeading: "HR & Automation",
        topicTagLine: "Optimize workflows & manage HR data",
        navigateTo: "/hr",

        topicContent: [
          {
            contentHeading: "Employee management",
            des: "Use employee profiles, company structure, access permissions, Active Directory",
          },
          {
            contentHeading: "Cuktural & engagement",
            des: "Get company news, polls, appreciation badges, tags, personal notifications",
          },
          {
            contentHeading: "Mobile HR",
            des: "Chat, video calls, employee profiles, approvals, notifications on the go",
          },
          {
            contentHeading: "Work management",
            des: "Track employee performance with KPI, work reports, supervisor view",
          },
          {
            contentHeading: "Internal communications",
            des: "Communicate via video announcements, memos, public and private chats",
          },
          {
            contentHeading: "CoPilot in Feed",
            des: "Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
          },
          {
            contentHeading: "Information management",
            des: "Work with knowledge bases, online documents, file storage, access permissions",
          },
          {
            contentHeading: "Automation",
            des: "Streamline operations with requests, approvals, expense reports, RPA, workflow automation",
          },
        ],
      },
    },

    coPilot: {
      panel: {
        topicIcon: copilotIcon,
        topicHeading: "CoPilot",
        topicTagLine: "Your AI-powered assistant in Bitrix24",
        navigateTo: "/copilot",

        topicContent: [
          {
            contentHeading: "CoPilot in CRM",
            des: "Call audio-to-text transcription, call summary, field autocompletion in deals",
          },
          {
            contentHeading: "CoPilot in Tasks",
            des: "AI-generated task descriptions, task summaries, checklists, comments",
          },
          {
            contentHeading: "CoPilot in Chat",
            des: "Unlimited source of ideas, AI-generated texts, brainstorming, and more",
          },
          {
            contentHeading: "CoPilot in Sites & Stores",
            des: "Compelling copy on demand, AI-generated images, detailed prompts, text translation",
          },
          {
            contentHeading: "CoPilot in Feed",
            des: "Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
          },
          {
            contentHeading: "CoPilot in Video Calls",

            des: "Streamline operations with requests, approvals, expense reports, RPA, workflow automation",
          },
        ],
      },
    },
  };
  //  console.log(dropdown.crm.panel)
  const [panelStatus, setPanelStatus] = useState(false);
  const [idStatus, setItemId] = useState("0");

  const [itemtoView, setItemToView] = useState(dropdown.crm);
console.log(itemtoView)
  const showDropdown = (dataForItem, sideId) => {
    setItemToView(dataForItem);
    setItemId(sideId);
  };

  const [megaDataStatus, setMegaData] = useState([]);
  console.log("HI HERE->",megaDataStatus)

  return (
    <>
      <CommonDataContext.Provider
        value={{
          sidebarStatus: panelStatus,
          setDropdownStatus: setPanelStatus,
          panelStatus: panelStatus,
          setPanelStatus: setPanelStatus,
          showDropDown: showDropdown,
          viewItem: itemtoView,
          sideId: idStatus,
          megaDataStatus: megaDataStatus,
          setMegaData: setMegaData,
          sidebarData:sidebarData,
          dropdown:dropdown,
          side_1:side_1
          
        }}
      >
        {children}
      </CommonDataContext.Provider>
    </>
  );
};

export default DataContextProvider;
