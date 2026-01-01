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
  },
  page_3:{
    h:"Sales team collaboration tools",
    p:"Bitrix24 is so much more than just CRM – we have every tool you and your team may need to work together on your sales, clients, files, and other tasks.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/header-human-sales-team-collaboration.1366w.png.webp?1764863685915",

    h1:"Messenger",
    p1:"Our messenger is a secure way of keeping all your communications inside the company, without having to resort to a third-party solution. Create chats and channels, launch polls, communicate with external users (freelancers, contractors) via Collab, share files and give reactions.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/messenger.png.webp?1764863685915",

    l1:"Likes, reactions, and emojis",
    l2:"Chat history search",
    l3:"Message auto-delete",
    l4:"Polls to collect feedback & opinions",

    c1h:"One team – one messenger",
    c1p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/messenger-card-1.png.webp?1764863685915",
    c2h:"Channels",
    c2p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/messenger-card-2.png.webp?1764863685915",
    c3h:"Auto-delete for peace of mind",
    c3p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/messenger-card-3.png.webp?1764863685915",
    
    h2:"Bitrix24 Sync: video calls and conferences",
    p2:"No need to use Zoom or Skype as Bitrix24 sales team software features HD-quality video calls. Organize online meetings with your sales team, set up individual calls with sales reps, schedule video calls with your clients right from a CRM deal or lead.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/video-calls-and-conferences.png.webp?1764863685915",

    l5:"HD audio and video quality",
    l6:"100+ participants",
    l7:"Screen sharing",
    l8:"Custom backgrounds",
    l9:"Call recording",

    c4h:"Organize virtual meetings in one click",
    c4p:"nvite your colleagues to a chat and start a video conference call with one click. Initiate a video conference right from a CRM deal/lead, task, or event in your calendar.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/video-calls-and-conferences-card-1.png.webp?1764863685915",
    c5h:"HD audio and video quality",
    c5p:"Enjoy crisp clear audio and video quality even with slow Internet connection, from PC or smartphone.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/video-calls-and-conferences-card-2.png.webp?1764863685915",
    c6h:"Screen sharing and call recording",
    c6p:"Share your screen during a daily sales meeting to show important information to your colleagues. The meeting can be recorded and saved to your Bitrix24 Drive.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/video-calls-and-conferences-card-3.png.webp?1764863685915",


    h3:"Tasks",
    p3:"Bitrix24 sales collaboration software features tasks, projects, workgroups, Kanban boards, Gantt charts, and workload management to help you manage your sales team easier and more efficiently.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/tasks.png.webp?1764863685915",

    l10:"Kanban board",
    l11:"Gantt chart",
    l12:"Scrum",
    l13:"Task automation",
    l14:"Task templates",

    c7h:"Automated tasks & task templates",
    c7p:"You can set the system to create tasks automatically based on certain actions in CRM (e.g., when a deal is moved into the Invoice stage, you can set a task for accounting).",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/tasks-card-1.png.webp?1764863685915",
    c8h:"Checklists and sub-tasks",
    c8p:"Every task can be expanded to feature a number of sub-tasks or a checklist, which makes it easier to control the results.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/tasks-card-2.png.webp?1764863685915",
    c9h:"Different task view modes",
    c9p:"Choose between 5 different task view modes, depending on your preferences: Scrum, List, Kanban, Planner, and Gantt chart.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/tasks-card-3.png.webp?1764863685915",

    h4:"File storage",
    p4:"Bitrix24 Drive is the place where you create, edit, and share any work-related files. Easily accessible from any device, integrated with Google Docs, Office 365, and the rest of Bitrix24 sales productivity tools – everything you'd want from a file storage is here.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/file-storage.png.webp?1764863685915",

    l15:"24/7 online or offline access from PC or smartphone,",
    l16:"Configurable access permissions",
    l17:"Secure storage for all your data",
    l18:"Integrated with Office 365 and Google Docs",
    

    c10h:"Convenient file management",
    c10p:"Store important documents, co-edit and share them online with your team and external users. Create a group folder for your department or project and invite your teammates to collaborate online.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/file-storage-card-1.png.webp?1764863685915",
    c11h:"Access permissions",
    c11p:"Certain files and folders in your company should not be accessible to everyone (e.g., sales figures or sensitive client data). With Bitrix24 Drive, you can restrict access to such files and/or lock them to avoid accidental changes.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/file-storage-card-2.png.webp?1764863685915",
    c12h:"Your data is 100% secure",
    c12p:"Bitrix24 Drive features SSL-encrypted data transfer, daily backup, and version history/rollback. Our data centers are protected in accordance with SAS 70 Type II and conform to the Safe Harbor standard – the highest level of data security a civilian can get.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/file-storage-card-3.png.webp?1764863685915",


    h5:"Online documents",
    p5:"Upload, create, view, co-edit, and share documents with both your colleagues and external users inside Bitrix24. It supports all popular file formats, which means you can work not only with plain text documents but also spreadsheets and presentations.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/online-documents.png.webp?1764863685915",

    l19:"Supports docx, pptx, xls, pdf, txt, csv",
    l20:"Real-time co-editing",
    l21:"Access permissions",
    l22:"Document sharing",
    

    c13h:"Real-time document editing",
    c13p:"Create and edit text documents, spreadsheets, and presentations in real-time. Invite other users (whether they have a Bitrix24 account or not) to co-edit your documents.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/online-documents-card-1.png.webp?1764863685915",
    c14h:"Real-time collaboration",
    c14p:"No matter how many people are co-editing a document, you can always see who's worked on it recently and what changes have been made.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/online-documents-card-2.png.webp?1764863685915",
    c15h:"Document management",
    c15p:"Manage your documents via a single dashboard wh ere you can view all the recent activity, changes, and updates. Enable document lock to prevent it from accidental editing.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-team-collaboration/online-documents-card-3.png.webp?1764863685915"
  },

  page_4:{
    h:"Sales enablement",
    p:"Bitrix24 features every sales enablement marketing tool in the book – from estimates and invoices to e-signatures and online payments, and everything in between.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/header-human-sales-enablement.png.webp?1764863685915",

    h1:"Estimates",
    p1:"When a person takes an interest in your products or services, you have to act quick and show what you've got and maybe even make a personalized offer – that's exactly why there are estimates in Bitrix24.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/estimates.png.webp?1764863685915",

    l1:"One-click estimate creation",
    l2:"Estimates linked to deals and/or leads",
    l3:"Kanban view",
    l4:"Estimate templates and automation",

    c1h:"Estimates integrated with CRM",
    c1p:"Every estimate in the Bitrix24 digital sales enablement tool can be linked to a deal, lead, contact, or company. The history of your client interactions (including estimates) is automatically saved.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/estimates-card-1.png.webp?1764863685915",
    c2h:"Easy to create and send",
    c2p:"When you create an estimate from a deal, certain information like client's name, products, deal amount, etc. gets automatically filled in – all you have to do is click on the â€˜Send' button.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/estimates-card-2.png.webp?1764863685915",
    c3h:"Templates and automation",
    c3p:"To save time, you can create templates for the most popular estimates. Using rules and triggers, you can set the estimate to be automatically sent to a client once they submit a form on your website.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/estimates-card-3.png.webp?1764863685915",
    
    h2:"Invoices",
    p2:"When a deal is coming to its logical conclusion, it's time to bill the client. In the Bitrix24 sales enablement platform, you can create and send invoices right from a CRM deal, making it easier to close them successfully.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/invoices.png.webp?1764863685915",

    l5:"Integrated with CRM",
    l6:"Integrated with Storecove (e-invoicing)",
    l7:"Customizable fields",
    l8:"Invoice templates",
    l9:"Automated, rule-based invoicing",

    c4h:"Easy to create",
    c4p:"Pick an existing template or create your own invoice with custom fields – the system will automatically insert proper payment and product details. One click and your invoice is ready!",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/invoices-card-1.png.webp?1764863685915",
    c5h:"Easy to send",
    c5p:"With our rules and triggers, you can set the system to send an invoice to your client when a deal is moved to a certain stage of the pipeline – a nice sales enablement automation tool.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/invoices-card-2.png.webp?1764863685915",
    c6h:"Easy to track and manage",
    c6p:"Every invoice is linked to the respective deal in CRM, making it easier to follow the history of your interaction with the client.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/invoices-card-3.png.webp?1764863685915",


    h3:"Booking",
    p3:"Make the most of your resources with Booking – an ideal tool for beauty salons, clinics, rental services, or any other business that relies on appointments. Integrated with our CRM, this tool allows you not only to keep your calendar full, but also retain clients.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/booking.png.webp?1764863685915",

    l10:"Automated reminders and notifications via SMS and WhatsApp",
    l11:"Client data gets saved to CRM",
    l12:"Overbooking and waiting list",
    l13:"Booking forms and self-booking",
    l14:"Ideal for businesses that rely on appointments",

    c7h:"Maximize resource utilization",
    c7p:"Booking helps you fill every slot effectively, ensuring your resources are used to their fullest potential. With customizable forms for self-booking, your clients get a simple and accessible way to schedule appointments, keeping your calendar busy while minimizing downtime.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/booking-card-1.png.webp?1764863685915",
    c8h:"Automated reminders and notifications",
    c8p:"Reduce no-shows and enhance customer satisfaction with automated booking reminders. Add custom message text, set time/conditions, and so on. Clients receive timely notifications to confirm or modify their appointments, saving you time and keeping your schedule optimized.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/booking-card-2.png.webp?1764863685915",
    c9h:"Integrated with CRM",
    c9p:"Every booking can be transformed into a lead or deal to capture client data and ensure no potential business opportunity is overlooked. Plus, with your client information stored securely in one place, you can easily leverage it for future marketing campaigns.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/booking-card-3.png.webp?1764863685915",

    h4:"Payments",
    p4:"Bitrix24 allows you to receive payments for your products and services online – just generate a payment link from a deal and send this link to the client. When the payment is complete, you receive a confirmation, and the client gets a proof of payment.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/payments.png.webp?1764863685915",

    l15:"A quick and easy way to receive payments",
    l16:"Ideal for small businesses",
    l17:"Integrated with CRM",
    l18:"Fully trackable",
    

    c10h:"Convenient payment process",
    c10p:"Pick a product from your catalog, generate a payment link and send it to your client via email, SMS, or messenger. The client opens the link and chooses the payment method.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/payments-card-1.png.webp?1764863685915",
    c11h:"Proof of payment",
    c11p:"Once you've received the money from a client, the proof of payment will be sent to their smartphone.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/payments-card-2.png.webp?1764863685915",
    c12h:"Payment tracking",
    c12p:"Your sales reps can always check the current payment status and track the payment process in real-time.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/payments-card-3.png.webp?1764863685915",


    h5:"Bitrix24 Sign",
    p5:"Leave your clients no time for doubt – get any document e-signed online, fast and easy. It's that final little push you need to seal the deal and make the sale happen.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/bitrix24-sign.png.webp?1764863685915",

    l19:"Easy to use – for you and your clients",
    l20:"UETA and ESIGN-compliant",
    l21:"Integrated with CRM",
    l22:"Document templates and autofilling",
    

    c13h:"Easy to use for you and your clients",
    c13p:"Sign documents online quickly and easily. Go paperless in just one click – save time, money, and even trees! Anytime you need to get a document signed by your client or contractor, just send them a link via email, SMS, or WhatsApp (no need to create a Bitrix24 account).",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/bitrix24-sign-card-1.png.webp?1764863685915",
    c14h:"E-sign documents right from CRM",
    c14p:"Bitrix24 Sign is integrated with your CRM, which makes it even more convenient to use: e.g., if you need to get an invoice signed, its fields can be autopopulated with the data from the respective deal. You can also create and save document templates.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/bitrix24-sign-card-2.png.webp?1764863685915",
    c15h:"Streamline your document signing process",
    c15p:"Use our business process automation tools to automate the process of preparing a document for signing and getting it signed. If the process gets stuck at a certain stage, you will always know where exactly and be able to step in and fix it.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/sales-enablement/bitrix24-sign-card-3.png.webp?1764863685915"



  },


  page_5:{
    h:"Analytics and reports",
    p:"Bitrix24 features a wide variety of CRM analytics tools to help you make informed decisions in every department: sales, marketing, customer service, and more.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/header-human-mobile-tasks.png.webp?1764863685915",

    h1:"Sales funnel",
    p1:"Bitrix24 CRM analytics software provides a wealth of actionable data and valuable insights to help you determine bottlenecks and identify your weak spots to improve efficiency.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/sales-funnel.png.webp?1764863685915",

    l1:"CRM funnel (with conversions)",
    l2:"Sales plan and dynamics",
    l3:"Lead analysis",
    l4:"Advanced CRM analytics",

    c1h:"CRM funnel (with conversions)",
    c1p:"Get a helicopter view of your sales process in the form of a funnel, with conversion rates at every stage. See where you win (or lose) most of your deals, with a complete breakdown for every employee.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/sales-funnel-card-1.png.webp?1764863685915",
    c2h:"Sales plan & dynamics",
    c2p:"See if your employees (and departments) reach their goals, in both percentage and money value. Select custom reporting periods and configure individual sales targets.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/sales-funnel-card-2.png.webp?1764863685915",
    c3h:"Lead analysis & reports",
    c3p:"Using our CRM analysis report, you can see how much money you make off of every lead, conversion rate for each stage of the funnel, and lead statistics per employee.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/sales-funnel-card-3.png.webp?1764863685915",
    
    h2:"Employee performance",
    p2:"itrix24 collects information on the number of converted leads or deals closed by a person they were assigned to. Stack these up against your plan or individual sales targets, and you'll see how efficient your employees are.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/employee-performance.png.webp?1764863685915",

    l5:"Individual sales performance",
    l6:"Rating by value of won deal",
    l7:"Converted leads per employee",
    l8:"Top grossing clients",
    l9:"Track the Employee work",

    c4h:"Individual performance",
    c4p:"Bitrix24 makes every sales rep's contribution to the company success clearly visible. Through a performance report, you can see how much money an employee makes, how many deals they've won, and so on.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/employee-performance-card-1.png.webp?1764863685915",
    c5h:"Lead statistics",
    c5p:"In addition to performance analytics, Bitrix24 allows you to see the number of leads (initial and repeat) converted by an employee, percentage of junk and lost leads, as well as conversion rate (individual and overall).",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/employee-performance-card-2.png.webp?1764863685915",
    c6h:"Top grossing clients",
    c6p:"An experienced sales manager simply can't have enough data. See how much money you make off of a client and get a list of your top-grossing clients for a custom reporting period.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/employee-performance-card-3.png.webp?1764863685915",


    h3:"Analytics",
    p3:"Get a full breakdown of your marketing spendings and see which channels yielded the best results. You will know exactly how much money was spent on each traffic source, how many new clients it generated, and which ones actually made a purchase.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/analytics.png.webp?1764863685915",

    l10:"Advertising ROI",
    l11:"Traffic reports",
    l12:"CRM sales analytics",
    l13:"Detailed data on every marketing channel",
    l14:"Breakdown marketing spendings",

    c7h:"Every ad dollar is accounted for",
    c7p:"Connect your ad traffic sources (ads on Facebook, Instagram, Google, websites and CRM forms you created in Bitrix24) and start tracking them right away. You can also track some offline marketing channels like phone calls or print ads as well.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/analytics-card-1.png.webp?1764863685915",
    c8h:"Sales Intelligence",
    c8p:"Find out the exact steps that led a customer to you to understand which ads are working better and optimize your marketing efforts. Bitrix24 Sales Intelligence also shows customer acquisition cost (CAC) and return on investment (ROI) for each of your marketing channels.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/analytics-card-2.png.webp?1764863685915",
    c9h:"Advertising ROI reports",
    c9p:"Bitrix24 CRM automatically shows the money you've spent on each traffic source, how many new clients it generated, and which ones of them actually made a purchase. Comprehensive CRM data analytics is generated in real time and is available for any custom period.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/analytics-card-3.png.webp?1764863685915",

    h4:"BI reports",
    p4:"Bitrix24 features a powerful built-in analytics tool. Choose from various data sources (leads, deals, etc.), set your own parameters, and create visually compelling CRM reports of any complexity.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/bi-reports.png.webp?1764863685915",

    l15:"Editable reports",
    l16:"Customizable dashboards",
    l17:"Report templates: sales dynamics, sales structure, deal analysis, etc.",
    l18:"Custom templates available from partners and Bitrix24 Market",
    

    c10h:"Comprehensive CRM analytics",
    c10p:"Analyze the efficiency of an individual employee, department or the whole company. Use our templates or create a custom report.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/bi-reports-card-1.png.webp?1764863685915",
    c11h:"Easy to use",
    c11p:"The whole thing is super intuitive and takes little to no time to master: our guides and tips will help you to set up proper CRM reporting and analytics.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/bi-reports-card-2.png.webp?1764863685915",
    c12h:"Custom access permissions",
    c12p:"Set custom access permissions for each individual user to decide whether they can only view or view and edit the reports.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/analytics-and-reports/bi-reports-card-3.png.webp?1764863685915",
  },


  page_6:{
    h:"Mobile CRM",
    p:"Bitrix24 free mobile CRM is more than just an extension of the web version. It's a comprehensive mobile CRM solution that features deals, invoices, payments, telephony, and other tools to help you manage clients and sales on the go.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/header-human-mobile-crm.png.webp?1764863685915",

    h1:"Leads",
    p1:"Work with leads from your smartphone (set up custom stages, forms, and fields), convert them to deals, contacts, or companies, quickly pull up any lead from your CRM and view its properties (responsible person, customer info, lead status, etc.).",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/leads.png.webp?1764863685915",

    l1:"Web forms",
    l2:"Rule-based lead qualification",
    l3:"Convert lead to deal, contact, company",
    l4:"Lead tracking and analytics",

    c1h:"Collect leads from multiple sources",
    c1p:"Acquire and track leads from multiple sources: web forms, email, telephony, ad campaigns on Google and Facebook, and more.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/leads-card-1.png.webp?1764863685915",
    c2h:"Convert anything into a lead",
    c2p:"Any submitted web form, incoming email, phone call, or message/comment on social media can be easily turned into a lead and added to your mobile sales CRM.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/leads-card-2.png.webp?1764863685915",
    c3h:"Nurture leads via multiple channels",
    c3p:"Reach out to your leads via email, phone call, voice broadcasting, SMS, social media, messengers – all from a single dashboard in Bitrix24",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/leads-card-3.png.webp?1764863685915",
    
    h2:"Deals",
    p2:"Quick-search through your deals to pull up the information you may need, track the deal progress, or issue an invoice and email it to your client – all from your smartphone. Create custom stages and move deals down the sales pipeline.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/deals.png.webp?1764863685915",

    l5:"Deal tracking",
    l6:"Repeat deals",
    l7:"Invoices",
    l8:"Built-in e-signature tool",
    l9:"Access permissions & roles",

    c4h:"Mobile deal management",
    c4p:"Track deal status to know what's going on with a particular deal at any given moment. Set up a custom sales pipeline with stages that are specific to your line of business.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/deals-card-1.png.webp?1764863685915",
    c5h:"Create invoices from smartphone",
    c5p:"Generate an invoice in just one tap right from a CRM deal and send it to the client via email or SMS.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/deals-card-2.png.webp?1764863685915",
    c6h:"Automation rules & triggers",
    c6p:"Choose from a variety of pre-configured rules and triggers to help your sales reps do their job: send client reminders, employee alerts, notifications, and more.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/deals-card-3.png.webp?1764863685915",


    h3:"Telephony",
    p3:"Give your client a call right from your Bitrix24 mobile CRM software. Receive calls from your prospects, record the call audio, and attach the file to the respective deal/lead for later use (this includes missed calls as well).",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/telephony.png.webp?1764863685915",

    l10:"Always in touch with your clients",
    l11:"Audio calls recording",
    l12:"Voice broadcasting and SMS campaigns",
    l13:"Custom integrations with local providers",
    l14:"Receive calls from your prospects",

    c7h:"Enhanced VoIP telephony solution",
    c7p:"Bitrix24 telephony features call tracking, routing, forwarding, screening, transcription, recording, and so much more.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/telephony-card-1.png.webp?1764863685915",
    c8h:"Integration with Bitrix24 mobile CRM",
    c8p:"Calls can be recorded and added to deals in Bitrix24 CRM for mobile. Incoming calls are forwarded to a sales rep responsible for a particular lead.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/telephony-card-2.png.webp?1764863685915",
    c9h:"Advanced telemarketing",
    c9p:"You can run an automatic dialer, install a callback widget on your website, send callback requests, use voice broadcasts and SMS.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/telephony-card-3.png.webp?1764863685915",

    h4:"Emails",
    p4:"Connect your existing inbox and start receiving/sending emails right from your Bitrix24. Launch email marketing campaigns, turn incoming emails into deals/leads/contacts, and manage your client communications easily.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/emails.png.webp?1764863685915",

    l15:"Connect up to 10 inboxes per user",
    l16:"Integrated with CRM",
    l17:"Email marketing (up to 250,000 emails/mo)",
    l18:"Automated email notifications",
    

    c10h:"CRM integration",
    c10p:"Turn an incoming email into a lead, deal, or contact in your CRM. If it's an existing client, you can email them right from the respective deal or lead, and view their response there as well.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/emails-card-1.png.webp?1764863685915",
    c11h:"Mighty email marketing",
    c11p:"Launch segment-based email marketing campaigns right from your CRM. Use our rules and triggers to set up automated email notifications and reminded based on the deal/lead status.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/emails-card-2.png.webp?1764863685915",
    c12h:"Access permissions",
    c12p:"Set up custom access permissions for each inbox you connect to make sure sensitive business data is well-protected – a highly useful tool for mobile CRM solutions.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/emails-card-3.png.webp?1764863685915",


    h5:"Calendar",
    p5:"Set up meetings with your clients in just a few taps, right from a deal or lead. Organize online video calls with your team to discuss work-related issues, or simply have a daily planning meeting.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/calendar.png.webp?1764863685915",

    l19:"Auto-sync with Google and Apple Calendars",
    l20:"Notifications and reminders",
    l21:"Open slots",
    l22:"Quick call or chat right from a calendar event",
    

    c13h:"Plan your day",
    c13p:"Organize meetings and events, invite your clients and external users, schedule appointments and plan your day – all with Bitrix24 mobile app.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/calendar-card-1.png.webp?1764863685915",
    c14h:"Organize events",
    c14p:"There's so much you can do with a simple event in Bitrix24 Calendar: create a quick chat, call up a client right from a deal/lead, set up an online meeting, assign a task, and more.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/calendar-card-2.png.webp?1764863685915",
    c15h:"Schedule meetings",
    c15p:"To schedule a meeting with a client, just send them a link to your calendar. Once the client picks an available time slot, it's confirmed automatically. After the meeting is over, you can update the deal in CRM.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/mobile-crm/calendar-card-3.png.webp?1764863685915"



  },

  page_7:{
    h:"Marketing",
    p:"Bitrix24 offers you plenty of CRM marketing tools to reach your clients in a way that's convenient to them: email, SMS, phone, social media, landing pages, and more. In addition to that, you get professional analytics tools to track the efficiency of your marketing efforts.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/header-human-marketing.png.webp?1764863685915",

    h1:"Email marketing",
    p1:"Send out promotional, informational, or other emails to the contacts from your CRM. Use our CRM email marketing rules and triggers to set up automated emails (e.g., when you need to inform the client that their order is confirmed or offer them a 15% birthday discount).",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/email-marketing.png.webp?1764863685915",

    l1:"Segmentation",
    l2:"Editable HTML email templates",
    l3:"Opt-in and unsubscribe",
    l4:"Reporting (open rate, CTR, etc.)",

    c1h:"Email marketing inside CRM",
    c1p:"You can bulk send up to 1,000,000 emails per month without having to use a paid email marketing service. Use one of our templates or create your own email from scratch and save it as a template for later use.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/email-marketing-card-1.png.webp?1764863685915",
    c2h:"Smart email automation",
    c2p:"Use our email marketing automation rules to send trigger-based emails. This could be really helpful in situations when you want to notify a client of additional discounts.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/email-marketing-card-2.png.webp?1764863685915",
    c3h:"Third-party integrations",
    c3p:"n addition to being a solid CRM with email marketing capabilities, Bitrix24 also features integrations with popular email marketing services like Twilio, Mailchimp, SendPulse, etc. so that you could easily export/import your data.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/email-marketing-card-3.png.webp?1764863685915",
    
    h2:"Social media marketing",
    p2:"Bitrix24 CRM marketing software allows you to connect your Google or Facebook account and launch campaigns right from your CRM.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/smm.png.webp?1764863685915",

    l5:"Lookalike audiences",
    l6:"Segmentation",
    l7:"Ad management",
    l8:"Analytics",
    l9:"Flexibility",

    c4h:"Create ad audiences based on segments",
    c4p:"You can select a segment in your client base and send it directly to your ad network account on Google or Facebook, showing ads only to those audiences who have already interacted with your brand.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/smm-card-1.png.webp?1764863685915",
    c5h:"Capture lookalike audiences",
    c5p:"Launch a Facebook or Instagram ad targeted at audiences who are almost identical to your existing segments. A great way to maximize your ROI – also available in the Bitrix24 CRM marketing tool.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/smm-card-2.png.webp?1764863685915",
    c6h:"Advertise your products with promoted posts",
    c6p:"Turn any post on your Facebook or Instagram into a selling ad, allowing your potential customers to shop your products inside their social media platform of choice – all done inside Bitrix24 CRM.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/smm-card-3.png.webp?1764863685915",


    h3:"SMS marketing",
    p3:"Bitrix24 features dozens of integrations with local SMS providers all across the globe to help you reach out to your customers in a quick and familiar way.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/sms-marketing.png.webp?1764863685915",

    l10:"Integrations with TextLocal, Plivo SMS, and more",
    l11:"Up to 100,000 phone numbers",
    l12:"SMS campaigns",
    l13:"Integrated with the Bitrix24 CRM",
    l14:"Reach to Customer",

    c7h:"Worry-free SMS campaigns",
    c7P:"Just pick the recipients from your Bitrix24 marketing CRM platform (individually or by segments), type your message, and hit Send.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/sms-marketing-card-1.png.webp?1764863685915",
    c8h:"Full client interaction history",
    c8p:"Every text message you send to a client is saved in their CRM profile (Contact) so that you can always track your interaction history.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/sms-marketing-card-2.png.webp?1764863685915",
    c9h:"Automated SMS notifications",
    c9p:"Using our CRM marketing automation rules and triggers, you can set a text message to be sent automatically (e.g., when a client's order is confirmed, when the payment is received, etc.).",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/sms-marketing-card-3.png.webp?1764863685915",

    h4:"Telemarketing",
    p4:"Call your clients directly from your CRM using nothing more than a headset and a Bitrix24 telephony integration. You can go with our built-in solutions or connect your existing telephony via SIP connector.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/telemarketing.png.webp?1764863685915",

    l15:"Make and receive calls 24/7",
    l16:"No additional equipment required",
    l17:"Integrated with Bitrix24 CRM marketing tools",
    l18:"Integration with Asterisk, RingCentral, etc.",
    

    c10h:"Call your clients from a local number",
    c10p:"Reach out to your clients in the most organic way – just give them a call from your local Bitrix24 phone number!",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/telemarketing-card-1.png.webp?1764863685915",
    c11h:"Fully integrated with CRM",
    c11p:"Every call can be recorded and automatically added to the respective lead or deal. As you're speaking with a client on the phone, you can easily update their profile in CRM.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/telemarketing-card-2.png.webp?1764863685915",
    c12h:"Switch to Bitrix24 VoIP and keep your number",
    c12p:"Got an office/cloud PBX or SIP-trunk? Use our telephony by renting a SIP-connector. This way, you can keep making free calls and pay just for the outbound calls at your current rates.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/telemarketing-card-3.png.webp?1764863685915",


    h5:"Landing pages",
    p5:"Got a major sale coming up? Create a memorable, visually appealing landing page in less than 30 minutes and start adding leads to your CRM digital marketing software via a customizable web form.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/landing-pages.png.webp?1764863685915",

    l19:"Visual, no-code website builder",
    l20:"Mobile-friendly, responsive design",
    l21:"100+ industry-specific templates",
    l22:"Free hosting",
    

    c13h:"Easier than you think",
    c13p:"Creating a landing page in our workspace is really easy. Based on the prompt, our AI assistant CoPilot can come up with an appropriate design, copy, images, and web forms – all in a matter of minutes.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/landing-pages-card-1.png.webp?1764863685915",
    c14h:"Lots of CRM tools for marketing",
    c14p:"Acquire more leads and turn them into customers by adding custom web forms and live chats to your landing page.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/landing-pages-card-2.png.webp?1764863685915",
    c15h:"Integration with CRM",
    c15p:"Every form submitted on your landing page results in a new lead/deal in CRM for marketing. If a customer messages you via live chat, a new dialog is created in the Contact Center (can be also saved to CRM).",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/marketings/landing-pages-card-3.png.webp?1764863685915"



  },

  page_8:{
    h:"Sales automation CRM",
    p:"Stop losing time to repetitive tasks: logging calls, sending follow-ups, etc. With Bitrix24 CRM, you can eliminate the manual busywork and focus on what matters most: closing deals.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/header-human-sales-automation.png.webp?1764863685915",

    h1:"CRM rules and triggers",
    p1:"Take the weight off your shoulders, eliminate the human error, and make the sales process run even smoother – all that is more than possible with our CRM automation rules and triggers.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/rules-and-triggers.png.webp?1764863685915",

    l1:"Automated emails and text messages",
    l2:"Tasks and events created automatically based on a trigger",
    l3:"Deal/lead status changed automatically",
    l4:"Proactive CRM",

    c1h:"Proactive CRM",
    c1p:"Set an automation rule (e.g., `create a new task`) that will get activated once a lead (or deal) moves to a new status in the sales pipeline. Automation rules can specify the activation time and the action: task, notification, email, call or any other action of your choice.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/rules-and-triggers-card-1.png.webp?1764863685915",
    c2h:"CRM triggers",
    c2p:"Triggers in Bitrix24 are used to move leads/deals from one stage to another. For example, you can set a trigger to track if the client you've sent an email to has opened it. Once this happens, the corresponding deal will be moved to the next stage of your sales pipeline.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/rules-and-triggers-card-2.png.webp?1764863685915",
    c3h:"Proactive CRM",
    c3p:"Once activated, the Proactive CRM mode inside Bitrix24 automatically reminds your employees of scheduled, urgent, and unfinished activities, prompting them to take action. This helps employees to prioritize their deals and reduces micromanagement.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/rules-and-triggers-card-3.png.webp?1764863685915",
    
    h2:"Workflow automation",
    p2:"In addition to streamlining various sales routines, you can also automate other workflows in your company – from approvals to expense reporting and everything in between.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/workflow-automation.png.webp?1764863685915",

    l5:"No-code RPA",
    l6:"Requests & approvals",
    l7:"Smart process automation (SPA)",
    l8:"Business process designer",
    l9:"CRM workflow automation",

    c4h:"Robotic process automation (RPA)",
    c4p:"Get rid of multistep approval processes by implementing our in-house RPA – a great HR and CRM automation tool.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/workflow-automation-card-1.png.webp?1764863685915",
    c5h:"Automate routine workflows",
    c5p:"Streamline standardized processes like leave requests, purchase requests, expense reporting, and more.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/workflow-automation-card-2.png.webp?1764863685915",
    c6h:"Smart process automation (SPA)",
    c6p:"Create new, custom entities in the Bitrix24 workflow automation CRM to match your company's needs and automate them using SPA.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/workflow-automation-card-3.png.webp?1764863685915",


    h3:"Automated funnels",
    p3:"Configure automation rules and triggers to simplify the way you work with deals. Connect different sales pipelines via tunnels.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/automated-funnels.png.webp?1764863685915",

    l10:"Automated reminders and notifications",
    l11:"Automated deal status change",
    l12:"Automated tasks",
    l13:"CRM sales automation",
    l14:"Custom access permissions",

    c7h:"Sales tunnels and pipelines",
    c7p:"Connect different sales pipelines – e.g., when a deal reaches a certain status in pipeline A (sales), it gets transferred to pipeline B (delivery) to continue its path to success there.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/automated-funnels-card-1.png.webp?1764863685915",
    c8h:"Automated deal status change",
    c8p:"The deal status can be changed automatically when a trigger that you've set is activated.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/automated-funnels-card-2.png.webp?1764863685915",
    c9h:"Reminders and notifications",
    c9p:"Based on the deal (or lead) status, our CRM automation software sends a reminder or notification to the specified user.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/automated-funnels-card-3.png.webp?1764863685915",

    h4:"AI-powered sales",
    p4:"Use our AI-powered tool CoPilot to create original ideas for your special offer, write compelling copy for a promotional email, or even transcribe your phone call with a client.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/ai-powered-sales.png.webp?1764863685915",

    l15:"Fresh ideas for your sales and marketing",
    l16:"Call transcription",
    l17:"Autocompleted fields in CRM deals/leads",
    l18:"Quality copy for email marketing and landing pages",
    

    c10h:"Fresh ideas for your sales and marketing",
    c10p:"Need to come up with a solid idea for your marketing campaign or special offer? Let CoPilot do the job – just be sure to describe your goals and target audience.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/ai-powered-sales-card-1.png.webp?1764863685915",
    c11h:"Call transcription",
    c11p:"Got off the phone after a 35-minute call with a client? No need to go back and listen through it all – our CoPilot will transcribe your call in a nice and easily readable text format.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/ai-powered-sales-card-2.png.webp?1764863685915",
    c12h:"Autocompleted fields in CRM deals or leads",
    c12p:"Can't be bothered to fill in the fields in your CRM manually? Not only can CoPilot transcribe your calls, but it can also automatically fill in the right fields (name, phone, company, etc.).",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/ai-powered-sales-card-3.png.webp?1764863685915",


    h5:"API and integrations",
    p5:"We offer hundreds of CRM integrations with popular apps and services, as well as cool add-ons and custom solutions developed by our partners to enhance your product functionality – all available for download on Bitrix24 Market.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/api-and-integrations.png.webp?1764863685915",

    l19:"Integrations with payment systems",
    l20:"Integrations with telephony and SMS providers",
    l21:"CRM integration with chatbots",
    l22:"REST API",
    

    c13h:"Integrations with popular apps and services",
    c13p:"Make your Bitrix24 CRM integration software compatible with Zoho, Jira, Pipedrive, Trello, Quickbooks, Shopify, Mailchimp, Google Analytics, PayPal, Xero, Ringcentral, and others.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/api-and-integrations-card-1.png.webp?1764863685915",
    c14h:"Custom solutions from our partners",
    c14p:"Everything and anything to enhance the functionality of your Bitrix24 – from industry-specific CRM templates to advanced CRM marketing automation.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/api-and-integrations-card-2.png.webp?1764863685915",
    c15h:"REST API",
    c15p:"You can use our CRM API integration to implement and integrate your custom solutions into Bitrix24 – e.g., custom field types, data transfer, reports, and more.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/crm/automation-and-integrations/api-and-integrations-card-3.png.webp?1764863685915"

  },

  page_9:{
    h:"AI-powered assistant CoPilot",
    p:"CoPilot is a powerful AI tool inside Bitrix24 designed to help you with mundane tasks and boost your creativity. Located conveniently throughout the product, CoPilot is always there when you need it.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/header-human-copilot.png.webp?1764863685915",

    h1:"CoPilot in CRM",
    p1:"There are plenty of tasks you can assign to CoPilot in the sales department – e.g., create original ideas for your special offer, write compelling copy for a promotional email, or even transcribe your phone call with a client.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm.png.webp?1764863685915",

    l1:"Fresh ideas for your sales and marketing",
    l2:"Call transcription",
    l3:"AI in CRM: deal and lead autofilling",
    l4:"Quality copy for email marketing and landing pages",

    c1h:"Fresh ideas for your sales and marketing",
    c1p:"Need to come up with a solid idea for your marketing campaign or special offer? Let CoPilot do the job – just be sure to describe your goals and target audience.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-1.png.webp?1764863685915",
    c2h:"Call transcription",
    c2p:"Got off the phone after a 35-minute call with a client? No need to go back and listen through it all – our CoPilot will transcribe your call in a nice and easily readable text format.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-2.png.webp?1764863685915",
    c3h:"Autofilling in CRM deals or leads",
    c3p:"Can’t be bothered to fill in the fields in your CRM manually? Not only can CoPilot transcribe your calls, but it can also automatically fill in the right fields (name, phone, company, etc.).",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-3.png.webp?1764863685915",
    
    h2:"CoPilot in Tasks",
    p2:"Your personal AI assistant is always ready to help when you're planning a project or creating a new task. CoPilot can easily come up with a brief and understandable task description based on your prompt and even offer a checklist that's appropriate for the task.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks.png.webp?1764863685915",

    l5:"Easy access to CoPilot in tasks and comments",
    l6:"Create task descriptions and checklists",
    l7:"Generate task summary in one click",
    l8:"Built-in translator and grammar check tool",
    l9:" CoPilot  easily give brief  task description",

    c4h:"Simplified task creation",
    c4p:"With CoPilot, you don't even have to finish the sentence – just write a brief outline and our AI will fill in the details, adding an optional checklist. That's how AI tasks work!",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-1.png.webp?1764863685915",
    c5h:"Task summary",
    c5p:"You don’t have to read every comment under every task to understand what it’s about and what the current status is – just ask CoPilot to give you a task summary.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-2.png.webp?1764863685915",
    c6h:"Checklists in one click",
    c6p:"Break down a long, wordy task description into a series of steps and add them as a checklist to that task. From there, you can easily add assignees to each step and start working.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-3.png.webp?1764863685915",


    h3:"CoPilot in Feed",
    p3:"When it comes to communicating with your team, CoPilot acts as your trusted and knowledgeable assistant. It can write an announcement, reply to a comment, come up with an idea, or even suggest constructive criticism.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed.png.webp?1764863685915",

    l10:"Built-in CoPilot menu in comments and posts",
    l11:"Write texts, create ideas and images",
    l12:"Praise or criticize people's posts and comments",
    l13:"Built-in translator and grammar check tool",
    l14:"Trusted and knowledgeable assistant",

    c7h:"Always at hand",
    c7p:"CoPilot is conveniently located where within a click's reach – when you're writing a post or replying to a comment, it can be easily activated either from the menu or simply by pressing the space bar.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-1.png.webp?1764863685915",
    c8h:"Instant AI content creation",
    c8p:"Just enter a prompt and our CoPilot will quickly come up with an idea, expand on your original thought, create a short summary of a big chunk of text, or check it for mistakes. Want to add an original image? No problem, CoPilot can create images as well.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-2.png.webp?1764863685915",
    c9h:"Virtually unlimited possibilities",
    c9p:"In addition to the basic capabilities you'd expect from a modern GPT-based AI tool, our CoPilot can easily praise or suggest constructive criticism of someone's message, idea, or opinion. Really cool stuff – especially when you're too busy to search for the right words.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-3.png.webp?1764863685915",

    h4:"CoPilot in Video Calls",
    p4:"Get the most out of every video call and increase the productivity of your online meetings with CoPilot Follow-Up. This AI-powered tool transcribes your video calls and analyzes them, providing you with a call summary and a list of recommendations for further improvement",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls.1366w.png.webp?1764863685915",

    l15:"Unbiased AI-powered call analysis",
    l16:"Highlights + recommendations",
    l17:"Word-for-word call transcript + detailed summary",
    l18:"Great way to increase productivity",
    

    c10h:"AI-powered video calls",
    c10p:"Just launch the CoPilot Follow-Up tool during a video call and our AI-powered assistant will start its unbiased analysis, resulting in a call summary and a detailed transcript with timestamps.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-1.png.webp?1764863685915",
    c11h:"Call summary",
    c11p:"The summary contains meeting agenda, key results, list of suggested follow-up actions (that can turned into tasks in one click), call rating, and recommendations.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-2.png.webp?1764863685915",
    c12h:"Feedback + recommendations",
    c12p:"Based on the call analysis, CoPilot Follow-Up gives you specific recommendations on what can be improved or changed in order to increase call efficiency and team productivity.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-3.png.webp?1764863685915",


    h5:"Privacy & security",
    p5:"Being an (artificially) intelligent piece of software, CoPilot is good at keeping secrets. Your data gets deleted immediately from the provider's server after you close the CoPilot dialog in chat, tasks, feed, or elsewhere in Bitrix24.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security.png.webp?1764863685915",

    l19:"Data privacy",
    l20:"Completely secure",
    l21:"Your data is not used for training",
    l22:"Clear chat history manually",
    

    c13h:"Your data is not used for training",
    c13p:"The algorithm that powers CoPilot does not save your data on a third-party server or use it for training. Once a CoPilot dialog is closed, all of its contents get deleted from the provider's servers.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-1.png.webp?1764863685915",
    c14h:"You are in full control of your data",
    c14p:"The requests you submit to CoPilot and the replies you get can be easily deleted manually at your convenience. To do so, you just need to clear the chat history in the chat menu.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-2.png.webp?1764863685915",
    c15h:"Completely secure",
    c15p:"Your data does not get transferred anywhere and stays protected every step of the way. Feel free to discuss any business-related issues with CoPilot and don't be shy – it's always there to help.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-3.png.webp?1764863685915"

  }
};

const side_2={
  page_1: {
    h: "Online workspace",
    p: "Everything you need for productive collaboration and communication is here: chat, online meetings, task management, calendar integration, workflow automation, document collaboration, and more.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/header-human-online-workspace.1366w.png.webp?1764863685915",

    h1: "Collaboration",
    p1: "Bitrix24 has everything a team needs to collaborate on projects – whether you're working in the office, remotely, or in the hybrid mode.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/collaboration.png.webp?1764863685915",

    l1: "Kanban board & Gantt chart",
    l2: "Checklists & subtasks",
    l3: "Task templates",
    l4: "Team calendar, drive, and knowledge base",

    c1h: "Bitrix24 Sync: video conferencing",
    c1p: "Hold online meetings, discuss projects, strike deals, and stay in touch with your team from wherever you are.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/collaboration-card-1.png.webp?1764863685915",
    c2h: "Calendar",
    c2p: "Organize meetings and events, invite your team members and external users, set appointments and plan your day.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/collaboration-card-2.png.webp?1764863685915",
    c3h: "Knowledge base",
    c3p: "A single place to store corporate knowledge and wisdom, knowledge bases in Bitrix24 can be easily edited and expanded by your team members.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/collaboration-card-3.png.webp?1764863685915",

    h2: "Boards",
    p2: "Whether you’re mapping out complex projects, collaborating on fresh ideas, or visualizing workflows, our digital whiteboards will make it easy to keep your team aligned and productive.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/boards.png.webp?1764863685915",
    
    l5: "Unlimited boards and members",
    l6: "20+ board templates",
    l7: "Scalable power (up to 400,000 objects per board)",
    l8: "Secure collaboration inside your workspace",
    l9: "Mapping out complex projects",

    c4h: "Professional-grade whiteboards",
    c4p:"From strategy sessions and design sprints to workflow visualization and project mapping, Boards empower your team to stay organized, creative, and connected.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/boards-card-1.png.webp?1764863685915",
    c5h:"Scalable power",
    c5p:"Create an unlimited number of online whiteboards for all your projects and add as many team members as you need. Handle even the most detailed projects with support for up to 400,000 objects per board.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/boards-card-2.png.webp?1764863685915",
    c6h:"Collaboration under one roof",
    c6p:"Seamlessly integrated with our chat, video calls, tasks, and other collaboration tools, Boards eliminate the need for third-party solutions, bringing everything you need under one roof.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/boards-card-3.png.webp?1764863685915",

    h3: "Bitrix24 Vibe",
    p3: "Personalize the start page in your Bitrix24 account to have quick, one-click access to important team and company information.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/vibe.png.webp?1764863685915",

    l10: "Quick and easy access to important info",
    l11: "Three default start page templates",
    l12: "Dozens of widgets to choose from",
    l13: "Add/remove widgets for more personalization",
    l14: "Custom templates available from partners",

    c7h: "Quick access to team and company data",
    c7p:"Bitrix24 Vibe is a great way to create shortcuts for specific elements of the product (such as the Feed and workflows) and bring up the important information (e.g., employee activity) that gets updated in real time.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/vibe-card-1.png.webp?1764863685915",
    c8h:"Personalized start page",
    c8p:"Choose from 3 default start page templates with dozens of customizable widgets that you can add, remove, move around, and edit to your liking. If you need even more personalization, order a completely custom template from our partners.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/vibe-card-2.png.webp?1764863685915",
    c9h:"Great for employee engagement",
    c9p:"Just one glance at the start page gives you a nice scope of the company's activity. With widgets like employee activity, birthdays, and others, you can create a warm, welcoming experience for both existing employees and newcomers.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/vibe-card-3.png.webp?1764863685915",

    h4:"Messenger",
    p4:"Our messenger is a secure way of keeping all your team communications inside the company. Create chats and channels, communicate with external users (freelancers, contractors) via Collab, share files and give reactions.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/messenger.png.webp?1764863685915",

    l15:"Likes, reactions, and emojis",
    l16:"Chat history search",
    l17:"Message auto-delete",
    l18:"Polls to collect feedback & opinions",
    

    c10h:"One team – one messenger",
    c10p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/messenger-card-1.png.webp?1764863685915",
    c11h:"Channels",
    c11p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/messenger-card-2.png.webp?1764863685915",
    c12h:"Auto-delete for peace of mind",
    c12p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/messenger-card-3.png.webp?1764863685915",


    h5:"Comments and reactions",
    p5:"Comments in the Bitrix24 cloud-based workspace are a quick and easy way to discuss work-related issues and share information with your team. Likes, reactions, and quotes add a bit of human touch to the usual chat and messaging routine.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/comments-and-reactions.png.webp?1764863685915",

    l19:"Comments in tasks and live feed",
    l20:"Notifications and mention",
    l21:"Likes and reactions",
    l22:"Real-time team collaboration",
    

    c13h:"Effortless communication",
    c13p:"Leave comments under tasks or posts in the feed, while also replying and reacting to comments left by others. This is a great way to discuss work-related issues and exchange opinions in a virtual workspace.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/comments-and-reactions-card-1.png.webp?1764863685915",
    c14h:"Likes and reactions",
    c14p:"Too busy to write a comment? Just let your colleagues know you've seen and read their message by simply leaving a like or choosing an appropriate reaction.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/comments-and-reactions-card-2.png.webp?1764863685915",
    c15h:"Notifications and mentions",
    c15p:"Anytime you want to get someone's attention, just mention that person in a comment, after which they will get immediately notified and be able to respond from their PC, laptop, or mobile device.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-workspaces/comments-and-reactions-card-3.png.webp?1764863685915"

  },

  page_2: {
    h: "Online documents and cloud file storage",
    p: "Bitrix24 features reliable cloud storage and an advanced online document management system for swift and efficient collaboration across your entire company.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/header-human-online-documents-and-cloud-file-storage.png.webp?1764863685915",

    h1: "Online documents",
    p1: "View, co-edit, and share documents online with your colleagues and external users. Create text documents, spreadsheets, and even presentations – all inside Bitrix24 document management software.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents.png.webp?1764863685915",

    l1: "Digital document management",
    l2: "Supports docx, pptx, xlsx, txt, csv",
    l3: "Integrated with Dropbox, Google Drive, OneDrive",
    l4: "Chat history search",

    c1h: "Real-time editing",
    c1p: "Create and edit text documents, spreadsheets, and presentations in real-time. Invite other users (whether they have a Bitrix24 account or not) to co-edit documents online.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents-card-1.png.webp?1764863685915",
    c2h: "Real-time collaboration",
    c2p: "No matter how many people are co-editing a document, you can always see who's worked on it recently and what changes have been made.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents-card-2.png.webp?1764863685915",
    c3h: "Online document management",
    c3p: "Manage documents via a single dashboard where you can view recent activity and changes. Tweak access permissions and enable document lock to prevent files from accidental editing.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/online-documents-card-3.png.webp?1764863685915",

    h2: "File storage software",
    p2: "Bitrix24 web file storage software allows you to create, edit, and share any work-related files. Easily accessible from both desktop and mobile devices, integrated with Google Docs and Office 365, Bitrix24 Drive is a great fit for your project management needs.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/file-storage.png.webp?1764863685915",
    
    l5: "24/7 access from any device",
    l6: "Safe and secure storage for your data",
    l7: "Integrated with Office 365 and Google Docs",
    l8: "Online documents",
    l9: "Configurable access permissions",

    c4h: "Ideal for online collaboration",
    c4p:"Store important files and documents, co-edit and share them online with your team and external users. Create a group folder for your department or project and invite your teammates to collaborate online.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/file-storage-card-1.png.webp?1764863685915",
    c5h:"Configurable access permissions",
    c5p:"Certain files and folders in your company should not be accessible to everyone (e.g., whether it's your top-secret project data or sales figures). With the Bitrix24 file storage and sharing software, you can restrict access to files and/or lock them to avoid accidental changes.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/file-storage-card-2.png.webp?1764863685915",
    c6h:"Integrated with popular apps",
    c6p:"Edit and store documents online via native integration with Google Docs, Office 365, or MS Office Online. If you already have some files stored on your Google Drive or Dropbox, you can easily connect them to your Bitrix24 Drive and migrate the files in just a few clicks.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/file-storage-card-3.png.webp?1764863685915",

    h3: "Knowledge base",
    p3: "A single place for you to store all your corporate knowledge and wisdom, Bitrix24 Knowledge Base can be easily edited and expanded by all your team members.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/knowledge-base.png.webp?1764863685915",

    l10: "Easy to create, edit, and share",
    l11: "Add videos and images",
    l12: "Business document management",
    l13: "Customizable access permissions",
    l14: "Ideal for projects and corporate knowledge",

    c7h: "Easy to create, edit, and share",
    c7p:"Anyone can create a knowledge base in Bitrix24 – just pick a template and start filling it up with articles, images, videos, or other types of content. Edit on the go and see the changes apply instantly.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/knowledge-base-card-1.png.webp?1764863685915",
    c8h:"Ideal place to store corporate knowledge",
    c8p:"People come and go, but information must stay inside your company. Whether it's instructions, checklists, or manuals, you can store and edit them in Bitrix24, organizing content in the most intuitive way.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/knowledge-base-card-2.png.webp?1764863685915",
    c9h:"Customizable access permissions",
    c9p:"In the Bitrix24 document management solution, you can restrict access to certain information by configuring permission settings for a specific knowledge base or for all of them at once.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-documents-and-cloud-file-storage/knowledge-base-card-3.png.webp?1764863685915",

    h4:"Collab",
    p4:"Collab is a simple and convenient way for you to collaborate with external users (freelancers, contractors, clients, etc.). All the project-related chats, video calls, files, and tasks stay inside your account, which allows for easier control and tighter security.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab.png.webp?1764863685915",

    l15:"One shared workspace",
    l16:"Chat, video calls, tasks, calendar",
    l17:"Ideal for external users",
    l18:"Seamless and secure collaboration",
    

    c10h:"Seamless collaboration",
    c10p:"Collaborate with external users in a compact, shared workspace that features chat, video calls, tasks, drive, calendar, and other tools.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-1.png.webp?1764863685915",
    c11h:"Safe and secure",
    c11p:"No need to use a third-party solution to exchange messages, share files, organize video calls, set tasks, and track work progress. All the project-related work stays inside your account.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-2.png.webp?1764863685915",
    c12h:"Always under your control",
    c12p:"Users inside a collab have limited access to your account, while you get to track every action and monitor work progress in real time.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-3.png.webp?1764863685915",


    h5:""
    // p5:"",
    // i5:"",

    // l19:"",
    // l20:"",
    // l21:"",
    // l22:"",
    

    // c13h:"",
    // c13p:"",
    // c13i:"",
    // c14h:"",
    // c14p:"",
    // c14i:"",
    // c15h:"",
    // c15p:"",
    // c15i:""

  },

  page_3:{
    h:"Workgroups and projects",
    p:"Collaborate on tasks and projects using the Bitrix24 free online workspace that features Kanban board, Gantt chart, Scrum, chat, online meetings, file storage, calendar, and more.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/header-human-workgroups.png.webp?1764863685915",

    h1:"Workgroups",
    p1:"orkgroups in Bitrix24 are designed to accommodate a team that works on different projects, featuring all the online workspace tools they might need.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/workgroups.png.webp?1764863685915",

    l1:"Kanban board, Gantt chart, or task list",
    l2:"Workgroup calendar, drive, and knowledge base",
    l3:"Chat and online meetings",
    l4:"Shared workspace online",

    c1h:"Different task modes",
    c1p:"Depending on a project, your online team workspace members can always choose the most convenient way to work with their tasks – Kanban board, Gantt chart, or a simple list.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/workgroups-card-1.png.webp?1764863685915",
    c2h:"Every tool you need",
    c2p:"A workgroup can feature tasks, drive, chat, feed, calendar, knowledge base, and other tools, depending on your choice.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/workgroups-card-2.png.webp?1764863685915",
    c3h:"Roles and permissions",
    c3p:"Set custom access permissions to decide which workgroup software members can perform certain actions (e.g., assign, view, and edit tasks, etc.).",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/workgroups-card-3.png.webp?1764863685915",
    
    h2:"Projects",
    p2:"Setting up a project in the Bitrix24 online workspace software is really easy – all the tools are already in place. Just add your team members, set access permissions, and get down to work!",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/projects.png.webp?1764863685915",

    l5:"Kanban board, Gantt chart, or task list",
    l6:"Project calendar, drive, and knowledge base",
    l7:"Chat and online meetings",
    l8:"Virtual workspace software",
    l9:"External users",

    c4h:"Different ways to work with tasks",
    c4p:"Depending on a project, you can always choose how to view and manage tasks in Bitrix24: via Kanban board, Gantt chart, or a simple list.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/projects-card-1.png.webp?1764863685915",
    c5h:"All the tools you need, in one place",
    c5p:"Every project you create features its own chat, calendar, file storage, knowledge base, and a videoconferencing tool.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/projects-card-2.png.webp?1764863685915",
    c6h:"External users",
    c6p:"You can invite external users via email or SMS and give them limited access permissions to collaborate with you on a project inside Bitrix24.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/projects-card-3.png.webp?1764863685915",


    h3:"Collab",
    p3:"Collab is a simple and convenient way for you to collaborate with external users (freelancers, contractors, clients, etc.). All the project-related chats, video calls, files, and tasks stay inside your account, which allows for easier control and tighter security.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab.png.webp?1764863685915",

    l10:"One shared workspace",
    l11:"Chat, video calls, tasks, calendar",
    l12:"Ideal for external users",
    l13:"Seamless and secure collaboration",
    l14:"No file ever gets lost",

    c7h:"Seamless collaboration",
    c7p:"Collaborate with external users in a compact, shared workspace that features chat, video calls, tasks, drive, calendar, and other tools.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-1.png.webp?1764863685915",
    c8h:"Safe and secure",
    c8p:"No need to use a third-party solution to exchange messages, share files, organize video calls, set tasks, and track work progress. All the project-related work stays inside your account.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-2.png.webp?1764863685915",
    c9h:"Always under your control",
    c9p:"Users inside a collab have limited access to your account, while you get to track every action and monitor work progress in real time.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-3.png.webp?1764863685915",

    h4:"Access permissions",
    p4:"Bitrix24 workspace management software allows you to set granular access control for every project and task, which makes sense, especially when it comes to financial and other sensitive data,.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/access-permissions.png.webp?1764863685915",

    l15:"Task and project access permissions",
    l16:"External users",
    l17:"Permission to view and edit project-related files",
    l18:"Authorization history",
    

    c10h:"Different project privacy levels",
    c10p:"There are three project privacy levels in the Bitrix24 workgroup application software: public (anyone can view and join), private (invitation-only access), and hidden.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/access-permissions-card-1.png.webp?1764863685915",
    c11h:"Granular access permissions",
    c11p:"Within a project or workgroup, you can set per-user (per-group) access permissions, deciding who can assign tasks, view/edit files, post comments, etc.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/access-permissions-card-2.png.webp?1764863685915",
    c12h:"Authorization history",
    c12p:"Bitrix24 gives you the ability to view the list of all users who logged in to their Bitrix24 workgroup chat software account, with time, date, and device they used for authorization.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/workgroups/access-permissions-card-3.png.webp?1764863685915",
  },

  page_4:{
    h:"Online meetings",
    p:"Hold virtual meetings, discuss projects, strike deals, and stay in touch with your team from wherever you are: at home, in the office, or on the go.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/header-online-meetings.png.webp?1764863685915",

    h1:"Bitrix24 Sync: video calls and web conferences",
    p1:"Why spend time exchanging messages in the chat when you can make a quick conference call? Resolving work issues and discussing new ideas is always easier when you can meet face to face.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/video-calls.png.webp?1764863685915",

    l1:"100+ participants",
    l2:"HD video and audio quality",
    l3:"Secure connection",
    l4:"External users",

    c1h:"HD video and audio",
    c1p:"Our technology maintains stable audio and video quality throughout the virtual conference so that you could enjoy crisp sound and clear picture even with slow Internet connection.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/video-calls-card-1.png.webp?1764863685915",
    c2h:"Secure connection",
    c2p:"The connection is established via an encrypted data transfer with an SSL certificate, which means your calls are completely secure and no one will ever get access to them.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/video-calls-card-2.png.webp?1764863685915",
    c3h:"Invite external users",
    c3p:"You can always invite your partners and colleagues to join your remote meetings – even if they are not Bitrix24 users yet. Just send them a unique private link and they're in.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/video-calls-card-3.png.webp?1764863685915",
    
    h2:"AI-powered video conferencing",
    p2:"Get the most out of every video call and increase the productivity of your online meetings with CoPilot Follow-Up. This AI-powered tool transcribes your video calls and analyzes them, providing you with a call summary and a list of recommendations for further improvement.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/ai-powered-video-conferencing.1366w.png.webp?1764863685915",

    l5:"Unbiased AI-powered call analysis",
    l6:"Highlights + recommendations",
    l7:"Word-for-word call transcript + detailed summary",
    l8:"Great way to increase productivity",
    l9:"Provide recommendations for improvement.",

    c4h:"AI-powered video calls",
    c4p:"Just launch the CoPilot Follow-Up tool during a video call and our AI-powered assistant will start its unbiased analysis, resulting in a call summary and a detailed transcript with timestamps.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/ai-powered-video-conferencing-card-1.png.webp?1764863685915",
    c5h:"Call summary",
    c5p:"The summary contains meeting agenda, key results, list of suggested follow-up actions (that can be turned into tasks in one click), call rating, and recommendations.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/ai-powered-video-conferencing-card-2.png.webp?1764863685915",
    c6h:"Feedback + recommendations",
    c6p:"Based on the call analysis, CoPilot Follow-Up gives you specific recommendations on what can be improved or changed in order to increase call efficiency and team productivity.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/ai-powered-video-conferencing-card-3.png.webp?1764863685915",


    h3:"Effortless communication",
    p3:"Real-time meetings in Bitrix24 are easily the best way to communicate online, especially for remote teams. Everything you'd expect from a top-notch online meeting platform is here – plus, it's already integrated into your chats, tasks, projects, calendar, CRM, and other Bitrix24 tools.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/effortless-communication.png.webp?1764863685915",

    l10:"Background blur",
    l11:"Custom backgrounds",
    l12:"Screen sharing",
    l13:"Call audio/video recording",
    l14:"Meeting brief",

    c7h:"Screen sharing",
    c7p:"Share your screen during a video call to show images, online presentations, spreadsheets, and other documents to the participants.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/effortless-communication-card-1.png.webp?1764863685915",
    c8h:"Call recording",
    c8p:"Your collaborative meetings can be recorded and saved to Bitrix24 Drive, which is especially helpful when you're talking to a client or contractor.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/effortless-communication-card-2.png.webp?1764863685915",
    c9h:"Meeting brief",
    c9p:"As you're in the middle of a conversation with your teammates, just pull up a text file and write down a quick summary. Once the meeting is over, the brief will be sent to all of the participants.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/effortless-communication-card-3.png.webp?1764863685915",

    h4:"Comments",
    p4:"Comments in Bitrix24 are a quick and easy way to discuss work-related issues and share important information with your team. Likes, reactions, and quotes add a bit of human touch to the usual online collaboration routine.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/comments.png.webp?1764863685915",

    l15:"Comments in tasks and feed",
    l16:"Notifications and mentions",
    l17:"Likes and reactions",
    l18:"Works from smartphones",
    

    c10h:"Online communication",
    c10p:"Leave comments under tasks or posts in the feed, reply and react to comments left by others. This is a great way to discuss work-related issues and exchange opinions with your teammates.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/comments-card-1.png.webp?1764863685915",
    c11h:"Likes and reactions",
    c11p:"Too busy to write a comment? Just let your colleagues know you've seen and understood their message by simply leaving a like or choosing an appropriate reaction",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/comments-card-2.png.webp?1764863685915",
    c12h:"Notifications and mentions",
    c12p:"Anytime you want to get someone's attention, just mention that person in a comment, after which they will get immediately notified and be able to respond from their PC, laptop, or mobile device.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/online-meetings/comments-card-3.png.webp?1764863685915",


    // h5:"",
    // p5:"",
    // i5:"",

    // l19:"",
    // l20:"",
    // l21:"",
    // l22:"",
    

    // c13h:"",
    // c13p:"",
    // c13i:"",
    // c14h:"",
    // c14p:"",
    // c14i:"",
    // c15h:"",
    // c15p:"",
    // c15i:""



  },


  page_5:{
    h:"Free shared calendars from Bitrix24",
    p:"Get a free online calendar for your business to plan meetings, manage tasks, and set appointments – all part of a single online calendar collaboration platform called Bitrix24.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/header-human-shared-calendars.png.webp?1764863685915",

    h1:"Calendar",
    p1:"Organize meetings and events, invite your team members and external users, set appointments and plan your day – all with Bitrix24 calendar collaboration tools.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar.png.webp?1764863685915",

    l1:"Schedule meetings across different time zones,",
    l2:"Recurring events",
    l3:"Instant online meeting from any event",
    l4:"Web + mobile",

    c1h:"Time zones",
    c1p:"When you try to invite someone who's in another time zone, our calendar will take this person's local time into consideration and notify you if they might not be available.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar-card-1.png.webp?1764863685915",
    c2h:"Recurring events",
    c2p:"You can set any event in your Bitrix24 calendar to repeat on a daily, weekly, monthly, or any other basis. Works great for daily planning meetings and similar events.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar-card-2.png.webp?1764863685915",
    c3h:"Instant online meetings",
    c3p:"You can start an online meeting right from an event in your calendar. All of its participants will be automatically added to the video call.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/calendar-card-3.png.webp?1764863685915",
    
    h2:"Open slots",
    p2:"Scheduling a meeting is so much easier when you can pick an available slot in a person's calendar without having to message that person first and ask them when they can make it. This is especially helpful for group meetings.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/open-slots.png.webp?1764863685915",

    l5:"Confirmation via email, messenger, or SMS",
    l6:"Team calendars",
    l7:"Shared scheduling",
    l8:"Integrated with iCalendar",
    l9:"External users",

    c4h:"Easy and convenient scheduling",
    c4p:`Open slots in Bitrix24 eliminate the need for an endless back-and-forth messaging ("Can you make it 9:00 am? No? How about 10 am?") and allows you to set up group meetings easily.`,
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/open-slots-card-1.png.webp?1764863685915",
    c5h:"Ideal for group meetings",
    c5p:"The link to your calendar can be sent via email, messenger, or SMS to the meeting participants, so that they could pick an open slot and add it to their calendar.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/open-slots-card-2.png.webp?1764863685915",
    c6h:"Calendar synchronization",
    c6p:"Bitrix24 makes it easy to work with other calendars (including iCalendar) – the information about an event in our calendar can be downloaded in the .ics format.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/open-slots-card-3.png.webp?1764863685915",


    h3:"Event scheduling",
    p3:"Plan your day, organize work, schedule meetings with your colleagues and external users, manage daily, weekly, and monthly activities – all of this is easily done with Bitrix24.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/event-scheduling.png.webp?1764863685915",

    l10:"Personal, company, and group calendars",
    l11:"2-way sync with MS, Apple, Google",
    l12:"Collaborative calendars",
    l13:"Flexible access rights",
    l14:"Shared calendar notifications and reminders",

    c7h:"Personal, group, and company calendars",
    c7p:"Keep all your personal events in one calendar, while scheduling work meetings in a separate, group calendar. To schedule shared calendar events for the whole company, use the company calendar.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/event-scheduling-card-1.png.webp?1764863685915",
    c8h:"Calendar visibility",
    c8p:"Any event you create in Bitrix24 Calendar can be set as public or private. Public events are visible to everyone, while private events can be seen only by their participants.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/event-scheduling-card-2.png.webp?1764863685915",
    c9h:"Meeting room booking",
    c9p:"Create a list of meeting rooms and book an available room from that list when you're setting up an event. The participants will know where the event is supposed to happen, while the organizer will be sure that the room is available.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/shared-calendars/event-scheduling-card-3.png.webp?1764863685915",

    // h4:"",
    // p4:"",
    // i4:"",

    // l15:"",
    // l16:"",
    // l17:"",
    // l18:"",
    

    // c10h:"",
    // c10p:"",
    // c10i:"",
    // c11h:"",
    // c11p:"",
    // c11i:"",
    // c12h:"",
    // c12p:"",
    // c12i:"",


    // h5:"",
    // p5:"",
    // i5:"",

    // l19:"",
    // l20:"",
    // l21:"",
    // l22:"",
    

    // c13h:"",
    // c13p:"",
    // c13i:"",
    // c14h:"",
    // c14p:"",
    // c14i:"",
    // c15h:"",
    // c15p:"",
    // c15i:""



  },


  page_6:{
    h:"Mobile communications",
    p:"Stay in touch with your team and on top of your projects with the Bitrix24 mobile app. Featuring tasks, team messenger, video calls, calendar, and other tools, this is the ultimate means of collaboration and communication.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/header-human-mobile-communications.1366w.png.webp?1764863685915",

    h1:"Messenger",
    p1:"Our messenger is a secure way of keeping all your team communications inside the company. Create chats and channels, communicate with external users (freelancers, contractors) via Collab, share files and give reactions.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger.png.webp?1764863685915",

    l1:"Likes, reactions, and emojis",
    l2:"Chat history search",
    l3:"Message auto-delete",
    l4:"Polls to collect feedback & opinions",

    c1h:"One team – one messenger",
    c1p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger-card-1.png.webp?1764863685915",
    c2h:"Channels",
    c2p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger-card-2.png.webp?1764863685915",
    c3h:"Auto-delete for peace of mind",
    c3p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger-card-3.png.webp?1764863685915",
    
    h2:"Video calls",
    p2:"Why spend time exchanging messages when you can make a quick video call? Resolving work issues and discussing new ideas is always easier that way. Start an online meeting right from a chat, an event in your calendar, or directly from any task in our mobile app.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/video-calls.png.webp?1764863685915",

    l5:"100+ participants",
    l6:"AI video call analytics",
    l7:"No time limit",
    l8:"Screen sharing",
    l9:"Custom backgrounds",

    c4h:"Ideal for remote work",
    c4p:"Get your team together for a quick online discussion. Share your screen, send over files and links, enjoy crisp clear audio and video quality even with slow Internet connection.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/video-calls-card-1.png.webp?1764863685915",
    c5h:"AI video call analytics",
    c5p:"Our AI-powered assistant CoPilot can analyze your video calls, providing a detailed report with key discussed points and recommendations on how to increase call productivity.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/video-calls-card-2.png.webp?1764863685915",
    c6h:"Online meetings right where you need them",
    c6p:"You can quickly set up an online meeting from a chat, task, calendar event, or even a lead or a deal in CRM.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/video-calls-card-3.png.webp?1764863685915",


    h3:"Comments",
    p3:"Comments in the Bitrix24 mobile messaging app are a quick and easy way to discuss work-related issues and share important information with your team. Likes, reactions, and quotes add a bit of human touch to the usual office communication routine.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/comments.png.webp?1764863685915",

    l10:"Comments in tasks",
    l11:"Notifications and mentions",
    l12:"Likes and reactions",
    l13:"Task status summary",
    l14:"Share important information",

    c7h:"Comments in tasks",
    c7p:"Leave comments under tasks in your workgroup or reply to comments left by others. This is a great way to discuss task progress and exchange opinions with your teammates.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/comments-card-1.png.webp?1764863685915",
    c8h:"Likes and reactions",
    c8p:"Too busy to write a comment? Just let your colleagues know you've seen and understood their message by simply leaving a like or choosing an appropriate reaction.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/comments-card-2.png.webp?1764863685915",
    c9h:"Task status summary",
    c9p:"Even with 100+ comments under a task, the responsible person can always pin a comment that contains task summary, thus signifying the completion of that task",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/comments-card-3.png.webp?1764863685915",

    h4:"Calendar",
    p4:"Set up meetings with your clients in just a few taps, right from a deal or lead. Organize online video calls with your team to discuss work-related issues, or simply have a daily planning meeting.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/calendar.png.webp?1764863685915",

    l15:"Auto-sync with Google and Apple Calendars",
    l16:"iPhone integration",
    l17:"Quick call or chat from a calendar event",
    l18:"Schedule calls or meetings from CRM",
    

    c10h:"Plan your day",
    c10p:"Organize meetings and events, invite your clients and external users, schedule appointments and plan your day – all with Bitrix24 mobile app.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/calendar-card-1.png.webp?1764863685915",
    c11h:"Organize events",
    c11p:"There's so much you can do with a simple event in Bitrix24 Calendar: create a quick chat, call up a client right from a deal/lead, set up an online meeting, assign a task, and more.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/calendar-card-2.png.webp?1764863685915",
    c12h:"Schedule meetings with clients",
    c12p:"Send a link to your calendar to the client so that they could pick an available time slot. After the meeting, you can update the respective deal or simply add notes.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/calendar-card-3.png.webp?1764863685915",


    // h5:"",
    // p5:"",
    // i5:"",

    // l19:"",
    // l20:"",
    // l21:"",
    // l22:"",
    

    // c13h:"",
    // c13p:"",
    // c13i:"",
    // c14h:"",
    // c14p:"",
    // c14i:"",
    // c15h:"",
    // c15p:"",
    // c15i:""
  },

 page_7:{
    h:"AI-powered assistant CoPilot",
    p:"CoPilot is a powerful AI tool inside Bitrix24 designed to help you with mundane tasks and boost your creativity. Located conveniently throughout the product, CoPilot is always there when you need it.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/header-human-copilot.png.webp?1764863685915",

    h1:"CoPilot in CRM",
    p1:"There are plenty of tasks you can assign to CoPilot in the sales department – e.g., create original ideas for your special offer, write compelling copy for a promotional email, or even transcribe your phone call with a client.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm.png.webp?1764863685915",

    l1:"Fresh ideas for your sales and marketing",
    l2:"Call transcription",
    l3:"AI in CRM: deal and lead autofilling",
    l4:"Quality copy for email marketing and landing pages",

    c1h:"Fresh ideas for your sales and marketing",
    c1p:"Need to come up with a solid idea for your marketing campaign or special offer? Let CoPilot do the job – just be sure to describe your goals and target audience.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-1.png.webp?1764863685915",
    c2h:"Call transcription",
    c2p:"Got off the phone after a 35-minute call with a client? No need to go back and listen through it all – our CoPilot will transcribe your call in a nice and easily readable text format.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-2.png.webp?1764863685915",
    c3h:"Autofilling in CRM deals or leads",
    c3p:"Can’t be bothered to fill in the fields in your CRM manually? Not only can CoPilot transcribe your calls, but it can also automatically fill in the right fields (name, phone, company, etc.).",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-crm-card-3.png.webp?1764863685915",
    
    h2:"CoPilot in Tasks",
    p2:"Your personal AI assistant is always ready to help when you're planning a project or creating a new task. CoPilot can easily come up with a brief and understandable task description based on your prompt and even offer a checklist that's appropriate for the task.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks.png.webp?1764863685915",

    l5:"Easy access to CoPilot in tasks and comments",
    l6:"Create task descriptions and checklists",
    l7:"Generate task summary in one click",
    l8:"Built-in translator and grammar check tool",
    l9:" CoPilot  easily give brief  task description",

    c4h:"Simplified task creation",
    c4p:"With CoPilot, you don't even have to finish the sentence – just write a brief outline and our AI will fill in the details, adding an optional checklist. That's how AI tasks work!",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-1.png.webp?1764863685915",
    c5h:"Task summary",
    c5p:"You don’t have to read every comment under every task to understand what it’s about and what the current status is – just ask CoPilot to give you a task summary.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-2.png.webp?1764863685915",
    c6h:"Checklists in one click",
    c6p:"Break down a long, wordy task description into a series of steps and add them as a checklist to that task. From there, you can easily add assignees to each step and start working.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-tasks-card-3.png.webp?1764863685915",


    h3:"CoPilot in Feed",
    p3:"When it comes to communicating with your team, CoPilot acts as your trusted and knowledgeable assistant. It can write an announcement, reply to a comment, come up with an idea, or even suggest constructive criticism.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed.png.webp?1764863685915",

    l10:"Built-in CoPilot menu in comments and posts",
    l11:"Write texts, create ideas and images",
    l12:"Praise or criticize people's posts and comments",
    l13:"Built-in translator and grammar check tool",
    l14:"Trusted and knowledgeable assistant",

    c7h:"Always at hand",
    c7p:"CoPilot is conveniently located where within a click's reach – when you're writing a post or replying to a comment, it can be easily activated either from the menu or simply by pressing the space bar.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-1.png.webp?1764863685915",
    c8h:"Instant AI content creation",
    c8p:"Just enter a prompt and our CoPilot will quickly come up with an idea, expand on your original thought, create a short summary of a big chunk of text, or check it for mistakes. Want to add an original image? No problem, CoPilot can create images as well.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-2.png.webp?1764863685915",
    c9h:"Virtually unlimited possibilities",
    c9p:"In addition to the basic capabilities you'd expect from a modern GPT-based AI tool, our CoPilot can easily praise or suggest constructive criticism of someone's message, idea, or opinion. Really cool stuff – especially when you're too busy to search for the right words.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-feed-card-3.png.webp?1764863685915",

    h4:"CoPilot in Video Calls",
    p4:"Get the most out of every video call and increase the productivity of your online meetings with CoPilot Follow-Up. This AI-powered tool transcribes your video calls and analyzes them, providing you with a call summary and a list of recommendations for further improvement",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls.1366w.png.webp?1764863685915",

    l15:"Unbiased AI-powered call analysis",
    l16:"Highlights + recommendations",
    l17:"Word-for-word call transcript + detailed summary",
    l18:"Great way to increase productivity",
    

    c10h:"AI-powered video calls",
    c10p:"Just launch the CoPilot Follow-Up tool during a video call and our AI-powered assistant will start its unbiased analysis, resulting in a call summary and a detailed transcript with timestamps.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-1.png.webp?1764863685915",
    c11h:"Call summary",
    c11p:"The summary contains meeting agenda, key results, list of suggested follow-up actions (that can turned into tasks in one click), call rating, and recommendations.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-2.png.webp?1764863685915",
    c12h:"Feedback + recommendations",
    c12p:"Based on the call analysis, CoPilot Follow-Up gives you specific recommendations on what can be improved or changed in order to increase call efficiency and team productivity.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/copilot-in-video-calls-card-3.png.webp?1764863685915",


    h5:"Privacy & security",
    p5:"Being an (artificially) intelligent piece of software, CoPilot is good at keeping secrets. Your data gets deleted immediately from the provider's server after you close the CoPilot dialog in chat, tasks, feed, or elsewhere in Bitrix24.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security.png.webp?1764863685915",

    l19:"Data privacy",
    l20:"Completely secure",
    l21:"Your data is not used for training",
    l22:"Clear chat history manually",
    

    c13h:"Your data is not used for training",
    c13p:"The algorithm that powers CoPilot does not save your data on a third-party server or use it for training. Once a CoPilot dialog is closed, all of its contents get deleted from the provider's servers.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-1.png.webp?1764863685915",
    c14h:"You are in full control of your data",
    c14p:"The requests you submit to CoPilot and the replies you get can be easily deleted manually at your convenience. To do so, you just need to clear the chat history in the chat menu.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-2.png.webp?1764863685915",
    c15h:"Completely secure",
    c15p:"Your data does not get transferred anywhere and stays protected every step of the way. Feel free to discuss any business-related issues with CoPilot and don't be shy – it's always there to help.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/copilot/privacy-and-security-card-3.png.webp?1764863685915"

  },

  
};


const side_3={
  page_1: {
    h: "Task management software",
    p: "Bitrix24 combines all the handiest task management tools in a single platform – choose the one you're most comfortable with and collaborate on as many projects as you need together with your team.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/header-human-task-management.png.webp?1764863685915",

    h1: "Tasks",
    p1: "Create tasks and manage deadlines with style and ease. In the office or on the go. From your laptop or smartphone. Bitrix24 task management app will always keep you notified of any project-related activity and help you focus on what's really important.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/tasks.png.webp?1764863685915",

    l1: "Task roles",
    l2: "Task and project templates",
    l3: "Task access permissions",
    l4: "Task reminders and notifications",

    c1h: "Easy to organize and manage",
    c1p: "There are 4 task roles in Bitrix24: the person who assigned the task, the person it was assigned to (assignee), those helping the assignee (participants), and those who need to be in the loop (observers).",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/tasks-card-1.png.webp?1764863685915",
    c2h: "Task and project templates",
    c2p: "If you're working with the same tasks and projects again and again, you can save them as templates to save time.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/tasks-card-2.png.webp?1764863685915",
    c3h: "Task focus mode",
    c3p: "Tasks with a recent ongoing activity inside them get featured on top of the task list to help you focus on what's really important – a really useful work management tool.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/tasks-card-3.png.webp?1764863685915",

    h2: "Kanban board",
    p2: "A classic personal task management tool, Kanban in Bitrix24 is everything you'd expect it to be: easy to use, highly visual, and extremely helpful for both Agile and regular teams.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/kanban-board.png.webp?1764863685915",
    
    l5: "Customizable stages",
    l6: "Task prioritization",
    l7: "Task reminders",
    l8: "Deadline mode",
    l9: "Integrated with chat and video calls",

    c4h: "Customizable Kanban stages",
    c4p:"True to the Agile team task management approach, Kanban stages in Bitrix24 are fully customizable (name, color) and can be set by each user individually.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/kanban-board-card-1.png.webp?1764863685915",
    c5h:"Easy to manage",
    c5p:"Move tasks from one stage to another by dragging and dropping them. Create tasks in one click and get notified of task-related activity. Tasks are sorted by deadline (the most urgent ones appear on top).",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/kanban-board-card-2.png.webp?1764863685915",
    c6h:"Deadline mode",
    c6p:"The deadline mode in Bitrix24 is a visual representation of your tasks in a Kanban board, where they are sorted by deadline. This is a great way to plan your workday and see which tasks require your immediate attention.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/kanban-board-card-3.png.webp?1764863685915",

    h3: "Scrum",
    p3: "With a full set of Scrum tools available in the Bitrix24 task management software, you don't have to be from an IT company to benefit from the iterative approach offered by this framework.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/scrum.png.webp?1764863685915",

    l10: "Full set of Scrum tools (sprints, backlog, DoDs, epics, etc.)",
    l11: "Custom access permissions",
    l12: "Team chats and online meetings",
    l13: "Team calendar, drive, and knowledge base",
    l14: "Non-tech friendly",

    c7h: "Full set of Scrum tools",
    c7p:"All the classic Scrum tools are here: backlog, sprints, definition of done, epics, story points, Scrumban, and more. If you've used Scrum before, you will find yourself in a familiar environment. If you're new to Scrum, you'll find it very easy to adapt to in Bitrix24.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/scrum-card-1.png.webp?1764863685915",
    c8h:"Integrated with chat and online meetings",
    c8p:"To facilitate communication and collaboration, Scrum in Bitrix24 features a built-in messenger and online meetings for 100+ participants. This makes it easier to hold daily Scrum meetings with your team and exchange information.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/scrum-card-2.png.webp?1764863685915",
    c9h:"Team calendar, drive, and knowledge base",
    c9p:"Every Scrum team needs a planning tool, a place where they can keep and share files, and a place where they can keep project-related documentation – all of these tools are available in the Bitrix24 task management software.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/scrum-card-3.png.webp?1764863685915",

    h4:"Gantt chart",
    p4:"Another classic project task management tool available in Bitrix24, Gantt chart is ideal for large-scale, multi-stage projects, allowing you to improve your project coordination and increase team efficiency.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/gantt-chart.png.webp?1764863685915",

    l15:"All 4 types of dependencies",
    l16:"Zoomable",
    l17:"Export chart to Excel or print out",
    l18:"Integrated with chat and video calls",
    

    c10h:"All 4 types of dependencies",
    c10p:"With all four types of dependencies (FF, SS, SF, FS) supported, you can easily lay out all the project tasks on a Gantt chart in the Bitrix24 free task management software and see how they are related to each other.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/gantt-chart-card-1.png.webp?1764863685915",
    c11h:"Visual task progress",
    c11p:"Follow the project progress displayed intuitively on a zoomable Gantt chart where each task has parameters such as status, priority, duration, deadline, and dependency.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/gantt-chart-card-2.png.webp?1764863685915",
    c12h:"Easy to manage deadlines and resources",
    c12p:"At any given moment, you can easily see what stage the project is currently in and who's doing what. Moving a deadline is done via a simple drag-and-drop move.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/gantt-chart-card-3.png.webp?1764863685915",


    h5:"AI-powered task management",
    p5:"Use our personal AI assistant to help you with planning a project or creating a new task. Bitrix24 CoPilot can easily come up with a brief and understandable task description based on your prompt and even offer a checklist that's appropriate for the task.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/ai-tasks.png.webp?1764863685915",

    l19:"Easy access to CoPilot in tasks and comments",
    l20:"Create task descriptions and checklists",
    l21:"Generate task summary in one click",
    l22:"Built-in translator and grammar check tool",
    

    c13h:"Simplified task creation",
    c13p:"With CoPilot, you don't even have to finish the sentence – just write a brief outline and our AI will fill in the details, adding an optional checklist.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/ai-tasks-card-1.png.webp?1764863685915",
    c14h:"Task summary",
    c14p:"You don't have to read every comment under every task to understand what it's about and what the current status is – just ask CoPilot to give you a task summary.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/ai-tasks-card-2.png.webp?1764863685915",
    c15h:"Great ideas on demand",
    c15p:"CoPilot is your unlimited source of fresh, original ideas in Bitrix24 – just enter a prompt and our AI will quickly come up with a few solid options that you can use as the basis for your own work.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-management/ai-tasks-card-3.png.webp?1764863685915"

  },

  page_2: {
    h: "Task tracking",
    p: "Knowing exactly how many tasks an employee is currently working on and how much time it takes to complete them is crucial to increasing work efficiency and improving team collaboration. Bitrix24 features a wide range of tools to help you with team task tracking – here are just some of them.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/header-human-task-tracking.png.webp?1764863685915",

    h1: "Checklists and subtasks",
    p1: "Checklists and subtasks come in handy when you need to tackle a big, complex task and ensure its flawless completion in the Bitrix24 task tracking software.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/checklists-and-subtasks.png.webp?1764863685915",

    l1: "Improved task control",
    l2: "Easier to manage complex tasks",
    l3: "Unlimited subtasks and checklists",
    l4: "Separate assignee for each item in a checklist",

    c1h: "Improved task control",
    c1p: "Adding a checklist to your task in the Bitrix24 work task tracker makes it easy to complete it and ensure that nothing important has been overlooked.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/checklists-and-subtasks-card-1.png.webp?1764863685915",
    c2h: "Easier to manage complex tasks",
    c2p: "Subtasks are ideal in situations when a task you're working on is just too big, and you need to split it into several smaller chunks of work, each with its own assignee.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/checklists-and-subtasks-card-2.png.webp?1764863685915",
    c3h: "Unlimited subtasks and checklists",
    c3p: "Create as many checklists or subtasks as you need and keep completing them one by one until you finish the whole task.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/checklists-and-subtasks-card-3.png.webp?1764863685915",

    h2: "Task summary",
    p2: "Even with 100+ comments under a task, the assignee can always pin a comment that contains the final task result, marking it as a summary and thus signifying the completion of that task.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/task-summary.png.webp?1764863685915",
    
    l5: "Easy to see the task results",
    l6: "Ideal for supervisors",
    l7: "Improved project task tracking",
    l8: "Works as a task report",
    l9: " Pin a comment",

    c4h: "CoPilot task summary",
    c4p:"You don't have to read every comment under every task to understand what it's about and what the current status is – just ask CoPilot to give you a task summary, and you'll get one in a second.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/task-summary-card-1.png.webp?1764863685915",
    c5h:"Ideal for supervisors",
    c5p:"When your team member is ready to close a task in the Bitrix24 project task tracker, you can request them to leave a comment containing the task summary. Once they post it, it gets pinned on top where you can easily read it at your convenience.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/task-summary-card-2.png.webp?1764863685915",
    c6h:"Always pinned to the top",
    c6p:"When a comment is marked as task status summary, it gets pinned to the top of the thread, making it easier to read for the supervisor and everyone else involved.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/task-summary-card-3.png.webp?1764863685915",

    h3: "Time tracking",
    p3: "Knowing how much time has been spent to complete a certain task is a great way to evaluate employee efficiency and distribute workload more evenly in the Bitrix24 task tracker software.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/time-tracking.png.webp?1764863685915",

    l10: "Time and task tracking",
    l11: "Task planned time",
    l12: "Task history",
    l13: "Time elapsed",
    l14: "Evaluate employee efficiency",

    c7h: "Task planned time",
    c7p:"Set the task planned time and compare it with the actual time it took to complete that task. This task tracking tool is a simple and straightforward way to measure your employee efficiency.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/time-tracking-card-1.png.webp?1764863685915",
    c8h:"Task time tracking",
    c8p:"Enable the time tracking option to see how much time it will take to complete a task. Use this data to optimize your team workload and plan projects more efficiently. The time task tracker can be paused/resumed when needed.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/time-tracking-card-2.png.webp?1764863685915",
    c9h:"Task history",
    c9p:"All the task tracking changes are reflected in the task history. There, you can see how many times a task was put on pause, the duration of these pauses, and the overall work pace.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/time-tracking-card-3.png.webp?1764863685915",

    h4:"Supervisor mode",
    p4:"In the supervisor mode, you can see all the tasks your subordinates are working on, assisting, or following, as well as their efficiency. This is a must-have tool for task planning and workload optimization.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/supervisor-mode.png.webp?1764863685915",

    l15:"Online task tracking",
    l16:"Employee efficiency",
    l17:"Customizable access permissions",
    l18:"Tracking by employee role",
    

    c10h:"Real-time workload tracking",
    c10p:"In the supervisor dashboard, you can see what each of your subordinates are up to at the moment and how many tasks they are currently working on. From there, you can quickly jump to any of the tasks and check on the work progress there.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/supervisor-mode-card-1.png.webp?1764863685915",
    c11h:"Employee efficiency",
    c11p:"Bitrix24 free task tracking software allows you to see the percentage of successfully completed tasks by an employee for a specific period of time – this data can be used to evaluate work efficiency.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/supervisor-mode-card-2.png.webp?1764863685915",
    c12h:"Customizable access permissions",
    c12p:"In accordance with your position in the company structure, you can see only see the tasks of your subordinates (department, team, etc.). The account administrator, however, has full access to all employees' tasks.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/task-tracking/supervisor-mode-card-3.png.webp?1764863685915",

  },

  page_3:{
    h:"API and integrations",
    p:"Connect your tasks to other services via cloud API integration for advanced task automation in Bitrix24. Use our Market to download and install useful apps, add-ons, and integrations with your favorite project management tools.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/header-human-api-and-integrations.1366w.png.webp?1764863685915",

    h1:"API",
    p1:"Bitrix24 REST API is open for tasks, workgroups, projects, data storage, calendars, and other parts of the product, allowing you to benefit from product customization and feature enhancement.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/api.png.webp?1764863685915",

    l1:"Request builder",
    l2:"Data import/export",
    l3:"Custom widgets",
    l4:"Task automation",

    c1h:"Request builder",
    c1p:"Inside Bitrix24 you will find a handy request builder, which you can use to create REST API requests directly from the interface.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/api-card-1.png.webp?1764863685915",
    c2h:"Data import/export",
    c2p:"You can use REST API methods to simplify the migration of large volumes of data from/to your Bitrix24.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/api-card-2.png.webp?1764863685915",
    c3h:"Task automation",
    c3p:"Using Bitrix24 REST API integrations, you can realize custom task automation scenarios that are not available through our standard rules and triggers.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/api-card-3.png.webp?1764863685915",
    
    h2:"Webhooks",
    p2:"Webhooks in Bitrix24 allow you to expand and enhance the basic functionality of our product and tailor it to your specific needs.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/webhooks.png.webp?1764863685915",

    l5:"Task tracking",
    l6:"Tasks from email",
    l7:"Inbound and outbound webhooks",
    l8:"Automated notifications",
    l9:"Webhook + API combo",

    c4h:"Easy to set up and use",
    c4p:"We provide an easy-to-use REST request builder that finds the necessary parameter values online for further use in external systems.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/webhooks-card-1.png.webp?1764863685915",
    c5h:"Wide range of applications",
    c5p:"You can use webhooks to import/export your project data, sync it with external systems, automate routine operations, optimize workflows, and more.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/webhooks-card-2.png.webp?1764863685915",
    c6h:"Inbound & outbound webhooks",
    c6p:"Outbound webhooks allow you to obtain information about the events in Bitrix24. To process Bitrix24 data using the API, you can create an inbound webhook.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/webhooks-card-3.png.webp?1764863685915",


    h3:"Apps and integrations",
    p3:"Bitrix24 Market features hundreds of useful apps, add-ons, solutions, and custom API integrations for your Bitrix24, enhancing its functionality and performance.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/apps-and-integrations.png.webp?1764863685915",

    l10:"Over 300 apps in the catalog",
    l11:"Integrations with popular services",
    l12:"Data migration apps",
    l13:"Billable hours for tasks",
    l14:"Custom API integrations ",

    c7h:"Integrations with popular services",
    c7p:"We have apps that can help you integrate Bitrix24 with Quickbooks, Google Sheets, PayPal, RingCentral, WhatsApp, Miro, and others.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/apps-and-integrations-card-1.png.webp?1764863685915",
    c8h:"Data migration apps",
    c8p:"Need to quickly transfer your data to Bitrix24? Install a migration app for Jira, Asana, Trello, Zapier, Zoho, Pipedrive, and lots of other services.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/apps-and-integrations-card-2.png.webp?1764863685915",
    c9h:"Billable hours for tasks",
    c9p:"Use our integration with the Billable Hours app to track working hours and create invoices.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/api-and-integrations/apps-and-integrations-card-3.png.webp?1764863685915",
  },

  page_4:{
    h:"Project management",
    p:"Get your team together, map out a project, define the roles, assign tasks, set the deadlines, and start working towards your goal – all with the Bitrix24 online project management software!",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/header-human-project-management.png.webp?1764863685915",

    h1:"Projects",
    p1:"Setting up a project in Bitrix24 is really easy – all the tools are already in place. You just need to add your team members, set access permissions, and get down to work!",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/projects.png.webp?1764863685915",

    l1:"Kanban board, Gantt chart, task list",
    l2:"Project calendar, drive, and knowledge base",
    l3:"Project chat and online meetings",
    l4:"Free project management app",

    c1h:"Different ways to work with tasks",
    c1p:"Depending on a project, you can always choose how to view and manage tasks in the Bitrix24 project management software: via Kanban board, Gantt chart, or a simple list.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/projects-card-1.png.webp?1764863685915",
    c2h:"All the project management tools you need",
    c2p:"Every project you create features its own chat, calendar, file storage, knowledge base, and a videoconferencing tool.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/projects-card-2.png.webp?1764863685915",
    c3h:"Access permissions",
    c3p:"Set custom access permissions to decide which users can perform certain actions (e.g., assign, view, and edit tasks, view files on the project drive, etc.). Invite external users to collaborate with you on a project inside Bitrix24.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/projects-card-3.png.webp?1764863685915",
    
    h2:"Workgroups",
    p2:"Workgroups in Bitrix24 are designed to accommodate a team that works on different projects, featuring all the collaboration and communication tools they might need.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/workgroups.png.webp?1764863685915",

    l5:"Kanban board, Gantt chart, task list",
    l6:"Workgroup calendar, drive, and knowledge base",
    l7:"Workgroup chat and online meetings",
    l8:"External users",
    l9:" Collaboration and communication tools",

    c4h:"Different task modes to choose from",
    c4p:"Depending on a project, your workgroup members can always choose the most convenient way to work with their tasks – Kanban board, Gantt chart, or a simple list.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/workgroups-card-1.png.webp?1764863685915",
    c5h:"Every tool you need, always at hand",
    c5p:"A workgroup can feature tasks, drive, chat, feed, calendar, knowledge base, and other tools, depending on your choice.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/workgroups-card-2.png.webp?1764863685915",
    c6h:"Roles and access permissions",
    c6p:"Set custom access permissions to decide which users can perform certain actions (e.g., assign, view, and edit tasks, view files on the workgroup drive, etc.). Invite external users to join a workgroup inside Bitrix24.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/workgroups-card-3.png.webp?1764863685915",


    h3:"Project planning",
    p3:"With the Bitrix24 project management system, you can easily plan your personal daily tasks, complex projects, and even employee workload.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/project-planning.png.webp?1764863685915",

    l10:"Kanban board",
    l11:"Gantt chart",
    l12:"Task time tracking",
    l13:"KPI and task efficiency",
    l14:"Employee workload planning",

    c7h:"Kanban board",
    c7p:"Kanban board is a simple and effective project management tool, allowing you to distribute tasks across a number of columns/stages with different names and colors.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/project-planning-card-1.png.webp?1764863685915",
    c8h:"Gantt chart",
    c8p:"Gantt chart is ideal for mapping out complex projects with a lot of related tasks performed in a particular sequence or dependency.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/project-planning-card-2.png.webp?1764863685915",
    c9h:"Workload planning and scheduling",
    c9p:"With the task tracking tool enabled in Bitrix24, you can see how long it takes for an employee to complete a task. This data can be used for project scheduling and workload planning.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/project-planning-card-3.png.webp?1764863685915",

    h4:"Task roles",
    p4:"Bitrix24 features several task roles designed to help you organize project work more efficiently. Plus, our free project management tool will always keep you notified of any project-related activity and help you focus on what's really important.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/task-roles.png.webp?1764863685915",

    l15:"Four distinctive task roles",
    l16:"Observers and participants in tasks",
    l17:"Notifications and reminders",
    l18:"External users",
    

    c10h:"Four distinctive task roles",
    c10p:"In Bitrix24, you can have 4 task roles: the person who assigned the task, the person it was assigned to (assignee), those helping the assignee (participants), and those who need to be in the loop (observers).",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/task-roles-card-1.png.webp?1764863685915",
    c11h:"Observers in tasks",
    c11p:"Adding an observer to a task in Bitrix24 is really convenient in situations when there's a person who does not actively participate in completing the task but needs to supervise the ongoing activity and maybe step in when necessary.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/task-roles-card-2.png.webp?1764863685915",
    c12h:"External users",
    c12p:"Need to collaborate with a freelancer or contractor? Add them as external users to your Bitrix24. They will receive an invitation link via email or SMS and join without having to create an account. External users have limited access permissions, which you can customize.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/task-roles-card-3.png.webp?1764863685915",


    h5:"Access permissions",
    p5:"When large teams work on a project, sometimes it makes sense to set different levels of access for different team members and groups, especially when it comes to financial and other sensitive data. Bitrix24 allows you to set granular access control for every project and task.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/access-permissions.png.webp?1764863685915",

    l19:"Task and project access permissions",
    l20:"External users",
    l21:"Permission to view and edit project-related files",
    l22:"Authorization history",
    

    c13h:"Different project privacy levels",
    c13p:"Projects in Bitrix24 can have three privacy levels: public (anyone can view and join), private (invitation-only access), and hidden (the project is not listen or visible to anyone except its members).",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/access-permissions-card-1.png.webp?1764863685915",
    c14h:"Granular access permissions",
    c14p:"Within a project or workgroup, you can set per-user (per-group) access permissions, deciding who can assign tasks, view/edit files, post comments, etc.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/access-permissions-card-2.png.webp?1764863685915",
    c15h:"Authorization history",
    c15p:"Bitrix24 agile project management software gives you the ability to view the list of all users who logged in to their Bitrix24 account, with time, date, and device they used for authorization.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-management/access-permissions-card-3.png.webp?1764863685915"

  },


  page_5:{
    h:"Employee performance",
    p:"Knowing how many tasks each of your team members does and how much time it takes to complete them is the key to managing employee performance. Bitrix24 offers a wide choice of tools to help you track employee efficiency and increase team productivity.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/header-human-employee-performance.png.webp?1764863685915",

    h1:"Task reports",
    p1:"Every task should result in a quick report. This is especially true for remote teams, where the manager simply cannot watch over everyone's back. Bitrix24 allows you to receive various kinds of work reports from your team members, all of which are customizable to your liking.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-reports.png.webp?1764863685915",

    l1:"Standard and custom reports",
    l2:"Task scoring",
    l3:"Efficiency reports",
    l4:"Automated reports",

    c1h:"Standard reports",
    c1p:"Get daily, weekly, and monthly reports from your team members, accept or decline them, write your comments, and track employee performance. ",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-reports-card-1.png.webp?1764863685915",
    c2h:"Custom reports",
    c2p:"Using our report wizard, you can create custom reports for departments and even individual employees, with custom fields.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-reports-card-2.png.webp?1764863685915",
    c3h:"Automation in reports",
    c3p:"Set a particular report to be automatically repeated every day, week, month, or any other custom reporting period",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-reports-card-3.png.webp?1764863685915",
    
    h2:"Workload management",
    p2:"Bitrix24 allows you to track the time your employees spend on a particular task and their involvement in projects. This data can be used for more efficient team workload management and planning.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/workload-management.png.webp?1764863685915",

    l5:"Task time tracking",
    l6:"Team workload tracker",
    l7:"Work schedules",
    l8:"Work time tracking",
    l9:"Involvement in tasks",

    c4h:"Involvement in tasks",
    c4p:"Bitrix24 employee performance software features a chart that shows involvement in tasks, with a detailed breakdown by each employee so that you can see who's doing what at any given moment and how busy they are.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/workload-management-card-1.png.webp?1764863685915",
    c5h:"Work schedules",
    c5p:"Work schedules in Bitrix24 allow you to set clock-in/out times, weekly workdays, and break timings and durations. This is a really great employee workload management tool for teams that work in shifts.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/workload-management-card-2.png.webp?1764863685915",
    c6h:"Work time tracking",
    c6p:"Using an online time clock built into Bitrix24, your team can easily start/pause/finish their working day from their phones or laptops. Employee work time data gets aggregated and is available to you as a supervisor.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/workload-management-card-3.png.webp?1764863685915",


    h3:"Task efficiency and KPI",
    p3:"Bring your team performance to the next level and achieve more with less, using Bitrix24 employee performance tracker.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-efficiency.png.webp?1764863685915",

    l10:"Time spent on task",
    l11:"Rating by supervisor",
    l12:"Deadline control",
    l13:"Task reports",
    l14:"Employee performance tracker",

    c7h:"Task rating by supervisor",
    c7p:"Every report can be either confirmed or declined, with an optional score –positive or negative. This data is aggregated automatically and can be used later for calculating KPI",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-efficiency-card-1.png.webp?1764863685915",
    c8h:"Employee performance",
    c8p:"All the tasks assigned to a person are automatically tracked to see how many were completed on time and without objections. You can view task efficiency by employees or departments.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-efficiency-card-2.png.webp?1764863685915",
    c9h:"KPI",
    c9p:"The more an employee has tasks which were completed on time and without objections, the higher their KPI is.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/employee-performance/task-efficiency-card-3.png.webp?1764863685915",
  },


  page_6:{
    h:"Mobile tasks",
    p:"Assign tasks, manage task progress, discuss task-related issues in chats and comments, set up online meetings and calls – all from your smartphone, all with the Bitrix24 free mobile app.Register free",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/header-human-mobile-tasks.png.webp?1764863685915",

    h1:"Task management",
    p1:"In addition to managing your own tasks from your smartphone, you can also assign tasks to your team members. Once a task has been created, the person you assigned it to will be immediately notified and proceed to work with no delay.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-management.png.webp?1764863685915",

    l1:"Quick task creation",
    l2:"Task search and filters",
    l3:"Task templates",
    l4:"Subtasks and checklists",

    c1h:"Quick task creation",
    c1p:"Grab your smartphone, open the Bitrix24 task creation app, create a task, add a checklist – and let the work begin!",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-management-card-1.png.webp?1764863685915",
    c2h:"Task search and filters",
    c2p:"No matter how many ongoing tasks and projects you have, you will always find the one you're looking for.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-management-card-2.png.webp?1764863685915",
    c3h:"Mobile project management",
    c3p:"With quick access to all of a project's files, task, and members from your smartphone, it's easy to monitor project-related activity and stay on top of your tasks.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-management-card-3.png.webp?1764863685915",
    
    h2:"Task tracking",
    p2:"Monitor task progress, track task results on the go, and stay notified of any task-related activity, using nothing but your smartphone with the Bitrix24 task tracking app installed on it.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-tracking.png.webp?1764863685915",

    l5:"Notifications and reminders",
    l6:"Task counters",
    l7:"Task summary",
    l8:"Task focus mode",
    l9:"Monitor task progress",

    c4h:"Always on top of your tasks",
    c4p:"You don't have to be by your laptop or PC all the time to track your team's work. Bitrix24 will notify you of any task-related activity, allowing you to react quickly.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-tracking-card-1.png.webp?1764863685915",
    c5h:"Task summary",
    c5p:"You can request the assignee to provide a task summary, so you can instantly see the result without having to look into the whole task process.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-tracking-card-2.png.webp?1764863685915",
    c6h:"Task focus mode",
    c6p:"Tasks with recent ongoing activity inside them get featured on top of the list to help you focus on what's really important.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-tracking-card-3.png.webp?1764863685915",


    h3:"Task communication",
    p3:"Bitrix24 notifications app has everything you need to communicate with your team and stay in touch with everyone who's actively involved in project work.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-communication.png.webp?1764863685915",

    l10:"Chat",
    l11:"Comments",
    l12:"Online meetings",
    l13:"Calendar app",
    l14:"notifications ",

    c7h:"Chat",
    c7p:"Communicate with your colleagues via individual or group chats. Share images, files, and links from your smartphone.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-communication-card-1.png.webp?1764863685915",
    c8h:"Comments",
    c8p:"Monitor task-related discussion in the comments under a task and step in when necessary by reacting to someone's comment or writing your own one.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-communication-card-2.png.webp?1764863685915",
    c9h:"Online meetings",
    c9p:"Need to discuss a task-related issue? Launch a quick online meeting with all of the task participants right from your smartphone.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/mobile-tasks/task-communication-card-3.png.webp?1764863685915",
  },

  page_7:{
    h:"Project team collaboration",
    p:"Working on a project is so much easier when you have all the right collaboration tools in one place, and that's exactly what Bitrix24 gives you. A built-in team messenger, online meetings, file storage, online documents, task management, and more.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/header-human-project-collaboration.1366w.png.webp?1764863685915",

    h1:"Messenger",
    p1:"Our messenger is a secure way of keeping all your team communications inside the company. Create chats and channels, communicate with external users (freelancers, contractors) via Collab, share files and give reactions",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/messenger.png.webp?1764863685915",

    l1:"Likes, reactions, and emojis",
    l2:"Chat history search",
    l3:"Message auto-delete",
    l4:"Polls to collect feedback & opinions",

    c1h:"One team – one messenger",
    c1p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/messenger-card-1.png.webp?1764863685915",
    c2h:"Channels",
    c2p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/messenger-card-2.png.webp?1764863685915",
    c3h:"Auto-delete for peace of mind",
    c3p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/messenger-card-3.png.webp?1764863685915",
    
    h2:"Sync: video calls",
    p2:"Why spend time exchanging text messages when you can make a quick video call? Resolving work issues and discussing new ideas is always easier that way. Start an online meeting right from a chat, an event in your calendar, or directly from any task.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/video-calls.png.webp?1764863685915",

    l5:"100+ participants",
    l6:"AI video call analytics",
    l7:"Screen sharing",
    l8:"Custom backgrounds",
    l9:"Secure connection",

    c4h:"Ideal for remote work",
    c4p:"Get your team together for a quick online discussion wherever they are. Share your screen, send over files and links, and enjoy crisp clear audio and video quality even with slow Internet connection.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/video-calls-card-1.png.webp?1764863685915",
    c5h:"CoPilot Follow-Up",
    c5p:"Our AI-powered assistant CoPilot can analyze your video calls, providing a word-for-word transcript, call summary, and recommendations on increasing call efficiency.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/video-calls-card-2.png.webp?1764863685915",
    c6h:"Video calls in one click",
    c6p:"You can quickly set up an online meeting from a chat, task, calendar event, or even a lead or a deal in CRM – a really useful tool for task management collaboration.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/video-calls-card-3.png.webp?1764863685915",


    h3:"Collab",
    p3:"Collab is a simple and convenient way for you to collaborate with external users (freelancers, contractors, clients, etc.). All the project-related chats, video calls, files, and tasks stay inside your account, which allows for easier control and tighter security.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab.png.webp?1764863685915",

    l10:"One shared workspace",
    l11:"Chat, video calls, tasks, calendar",
    l12:"Ideal for external users",
    l13:"Seamless and secure collaboration",
    l14:"No file ever gets lost",

    c7h:"Seamless collaboration",
    c7p:"Collaborate with external users in a compact, shared workspace that features chat, video calls, tasks, drive, calendar, and other tools.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-1.png.webp?1764863685915",
    c8h:"Safe and secure",
    c8p:"No need to use a third-party solution to exchange messages, share files, organize video calls, set tasks, and track work progress. All the project-related work stays inside your account.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-2.png.webp?1764863685915",
    c9h:"Always under your control",
    c9p:"Users inside a collab have limited access to your account, while you get to track every action and monitor work progress in real time.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/collab-card-3.png.webp?1764863685915",

    h4:"Task templates",
    p4:"If you often have to assign the same task again and again, why not turn it into a template and save yourself a lot of time? Bitrix24 allows you to do just that.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/task-templates.png.webp?1764863685915",

    l15:"Any task can be saved as a template",
    l16:"Task templates with sub-tasks and checklists",
    l17:"Repeat task template",
    l18:"Custom access permissions",
    

    c10h:"Easy way to work with tasks",
    c10p:"Anytime you feel like you might want to re-use a particular task in the future, feel free to save it as a template. This will help you save time on filling in all the task details in the future.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/task-templates-card-1.png.webp?1764863685915",
    c11h:"Templates with sub-tasks",
    c11p:"In addition to the task name, description, assignees, and other parameters, you can also copy all of the sub-tasks and add them to your template.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/task-templates-card-2.png.webp?1764863685915",
    c12h:"Repeat templates",
    c12p:"Sometimes it makes sense to have the system create certain tasks automatically (e.g., monthly reports) – and Bitrix24 task management software allows you to do just that.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/task-templates-card-3.png.webp?1764863685915",


    h5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/task-templates-card-3.png.webp?1764863685915",
    p5:"Bitrix24 provides you with a cloud file storage where you can create, edit, and share any work-related files. Easily accessible from both desktop and mobile devices, integrated with Google Docs and Office 365, Bitrix24 Drive is a great fit for your online project collaboration needs.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/file-storage.png.webp?1764863685915",

    l19:"24/7 online or offline access from any device",
    l20:"Safe and secure storage for all your data",
    l21:"Integrated with Office 365 and Google Docs",
    l22:"Online documents",
    

    c13h:"Ideal for online collaboration",
    c13p:"Store important files and documents, co-edit them online, and quickly share them with your team and external users. Create a group folder for your department or project and invite your teammates to collaborate online.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/file-storage-card-1.png.webp?1764863685915",
    c14h:"Custom access permissions",
    c14p:"Certain files and folders in your company should not be accessible to everyone (e.g., whether it's your top-secret project data or sales figures). With Bitrix24 Drive, you can restrict access to such files and/or lock them to avoid accidental changes.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/file-storage-card-2.png.webp?1764863685915",
    c15h:"Integrated with popular apps",
    c15p:"Bitrix24 Drive allows you to edit documents online via native integration with Google Docs, Office 365, or MS Office Online. If you already have some files stored on your Google Drive or Dropbox, you can easily connect them to your Bitrix24 Drive and migrate the files in just a few clicks.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/project-collaboration/file-storage-card-3.png.webp?1764863685915"
  },

  page_8:{
    h:"Task automation",
    p:"Bitrix24 features a variety of task automation tools to help you optimize your workflows, save time, and increase efficiency.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/header-human-task-automation.png.webp?1764863685915",

    h1:"Rules and triggers",
    p1:"Automating certain routine processes in your tasks using rules and triggers can help you save a great deal of time and eliminate human errors.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rules-and-triggers.png.webp?1764863685915",

    l1:"Easy, no-code setup",
    l2:"Wide choice of standard rules",
    l3:"Custom automation rules",
    l4:"Integrated with CRM and other Bitrix24 tools",

    c1h:"Easy, no-code setup",
    c1p:"Configuring a task automation rule in the Bitrix24 task automation software takes only a few minutes and does not require any programming skills whatsoever. The whole process is super intuitive and visual.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rules-and-triggers-card-1.png.webp?1764863685915",
    c2h:"Wide choice of operations",
    c2p:"You can automate a wide range of standard, routine operations like creating a task, changing a stage in Kanban, changing task status, changing the assignee, sending a notification or email to a particular employee, and much more.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rules-and-triggers-card-2.png.webp?1764863685915",
    c3h:"Integrated with CRM and other Bitrix24 tools",
    c3p:"Tasks can be automatically created based on certain triggers and actions in CRM (e.g., when a deal is moved to the next stage, a new task is created for an employee to prepare and email an invoice to the client).",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rules-and-triggers-card-3.png.webp?1764863685915",
    
    h2:"Recurring tasks automation",
    p2:"Tasks in Bitrix24 can be set to repeat every day, week, month, or any other custom period, which is really convenient for reports and other recurring activities.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/recurring-tasks-automation.png.webp?1764863685915",

    l5:"Task report automation",
    l6:"Easy to set up",
    l7:"Task templates",
    l8:"Deadline based on the task creation date",
    l9:"Repeat every day",

    c4h:"Task report automation",
    c4p:"Bitrix24 features daily/weekly reports that you may collect from your subordinates, which makes it easy to manage their work and track results.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/recurring-tasks-automation-card-1.png.webp?1764863685915",
    c5h:"Easy to set up",
    c5p:"Create a new task (or pick an existing one), set the interval, start date and end date, as well the time when you'd like this task to be created (e.g., every Friday at 5 PM), and it's done!",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/recurring-tasks-automation-card-2.png.webp?1764863685915",
    c6h:"Automated deadline",
    c6p:"You can specify the time period in which a task needs to be completed so that Bitrix24 will automatically set a deadline when that task is created by the system.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/recurring-tasks-automation-card-3.png.webp?1764863685915",


    h3:"Flows",
    p3:"Flows are a clever way of visualizing tasks that are related to a particular process inside your company or department (e.g., legal documents approval). Creating a flow allows everyone to see what the current workload is and identify bottlenecks to increase work efficiency.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/flow.png.webp?1764863685915",

    l10:"Customizable task templates",
    l11:"No more bottlenecks",
    l12:"Real-time workload management",
    l13:"Increased work efficiency",
    l14:"AI-based analysis and recommendations",

    c7h:"Multiple ways to work with tasks",
    c7p:"To distribute tasks, you can use a queue, assign them manually, or allow the team members to pick pending tasks once they become available.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/flow-card-1.png.webp?1764863685915",
    c8h:"Flow efficiency",
    c8p:"Once your flows start working, you will immediately see if there are any missed deadlines and take the necessary action, which leads to a more balanced and efficient workload management",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/flow-card-2.png.webp?1764863685915",
    c9h:"Real-time workload management",
    c9p:"If the number of tasks in progress exceeds a certain critical value, you will receive a notification and will be able to step in and redistribute the workload more evenly.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/flow-card-3.png.webp?1764863685915",

    h4:"RPA (Robotic Process Automation)",
    p4:"Bitrix24 RPA allows you to automate standard business processes (document approval, purchase request, expense report, etc.) and save up to 80% of your time on completing routine tasks.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rpa.png.webp?1764863685915",

    l15:"No-code RPA",
    l16:"Easy to set up",
    l17:"Project management automation",
    l18:"Easy to monitor and supervise",
    

    c10h:"No-code RPA",
    c10p:"Setting up an automated workflow in Bitrix24 takes less than 30 minutes and requires no coding skills required whatsoever – the whole process is visual and super-intuitive.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rpa-card-1.png.webp?1764863685915",
    c11h:"Workflow automation",
    c11p:"Our RPA is designed to help you make a standard business process run without your input. These automated workflows can be used to take a document through all of its approval stages, assign tasks, send emails, and so on.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rpa-card-2.png.webp?1764863685915",
    c12h:"Easy to monitor and supervise",
    c12p:"Monitoring an automated workflow in Bitrix24 is easy since all the details are shown on a single dashboard. You always know which stage a process is currently in, and if there's something holding it back, you can step in and fix the problem.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/tasks_and_projects/automation/rpa-card-3.png.webp?1764863685915",
  }
};


const side_4={
  page_1: {
    h: "Free website builder",
    p: "Use our intuitive, block-based website builder to create beautiful sites, landing pages or online stores that are fully integrated with our CRM and online marketing tools.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/header-human-website-builder.png.webp?1764863685915",

    h1: "Content management system (CMS)",
    p1: "Creating a template-based website is just the first step. You need to add and manage content (texts, images, videos, etc.), create and customize web forms, make your site SEO and mobile-friendly, host and publish it – and that's exactly what Bitrix24 CMS gives you.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/cms.png.webp?1764863685915",

    l1: "No-code website builder software",
    l2: "Easy to add and manage content",
    l3: "Mobile-friendly, responsive design",
    l4: "Free domain and hosting",

    c1h: "Easy to add and manage content",
    c1p: "Add, remove, and customize elements in the Bitrix24 custom website builder. Change fonts, styles, colors, add images, videos, texts – the whole process is super easy and intuitive.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/cms-card-1.png.webp?1764863685915",
    c2h: "Mobile-friendly, responsive design",
    c2p: "All of our website templates feature a mobile-friendly, responsive design, with all the tags and markup in the right places, making it conform to the basic SEO requirements.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/cms-card-2.png.webp?1764863685915",
    c3h: "Web forms",
    c3p: "Bitrix24 online website builder allows you to create custom web forms on your website. Every submitted form, incoming call, or chat message results in a new lead or deal added to your CRM.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/cms-card-3.png.webp?1764863685915",

    h2: "Templates and hosting",
    p2: "Being a template-based business website creator, Bitrix24 features over 100 industry-specific templates for you to pick from and customize till perfection.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/template.png.webp?1764863685915",
    
    l5: "100+ templates",
    l6: "Free hosting",
    l7: "Free website builder and domain",
    l8: "Integrated with CRM",
    l9: "Mobile-friendly",

    c4h: "100+ landing page templates",
    c4p:"From restaurants to hospitals, we have a template for almost any business. Just pick the one you like and customize it using our online website creator to create a cool design.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/template-card-1.png.webp?1764863685915",
    c5h:"Free landing page hosting",
    c5p:"With Bitrix24, you can choose your own second-level domain name and host your landing page for free – just pick a name you like and connect it to your website.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/template-card-2.png.webp?1764863685915",
    c6h:"Landing page marketing",
    c6p:"The landing pages you create in our ecommerce website builder come fully integrated with Bitrix24 CRM, marketing, and customer support tools – an ideal choice for small businesses.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/template-card-3.png.webp?1764863685915",

    h3: "AI-generated websites",
    p3: "reate a website in a matter of minutes with our AI-powered assistant CoPilot based on as little as a prompt. Based on the prompt, CoPilot will come up with an appropriate design, copy, images, and web forms.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/ai-generated.png.webp?1764863685915",

    l10: "Ideal for marketing and sales",
    l11: "No coding skills required",
    l12: "High-quality, original images",
    l13: "Compelling copy",
    l14: "Saves plenty of time",

    c7h: "AI-powered content",
    c7p:"Using AI-generated content instead of having to search for (and purchase) images or write your own copy allows you to save plenty of time and effort.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/ai-generated-card-1.png.webp?1764863685915",
    c8h:"Ready in a matter of minutes",
    c8p:"If you're planning to launch a flash sale or a seasonal promotion, no other tool can create a better website faster than CoPilot.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/ai-generated-card-2.png.webp?1764863685915",
    c9h:"Fully customizable",
    c9p:"Even if you're not pleased with the initial result, you can always tweak it (using the same prompt-based approach) until the website matches your vision.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-builder/ai-generated-card-3.png.webp?1764863685915",

  },

  page_2: {
    h: "Social selling",
    p: "Instead of having to switch between your business profiles on Facebook, Instagram, WhatsApp, or other platforms, use a single social selling tool where you can easily monitor customer activity, reply to messages and comments, analyze data and collect stats.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/header-human-social-selling.1366w.png.webp?1764863685915",

    h1: "WhatsApp integration",
    p1: "Start receiving WhatsApp messages from your clients directly to your Bitrix24 Contact Center without using your own WhatsApp or getting their business account.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/whatsapp.png.webp?1764863685915",

    l1: "Official integration",
    l2: "Instant WhatsApp support",
    l3: "Ideal for social media sales",
    l4: "Integrated with CRM",

    c1h: "Official integration",
    c1p: "Use social media for sales and give your clients more options to connect with your business by enabling the WhatsApp widget on your website.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/whatsapp-card-1.png.webp?1764863685915",
    c2h: "Instant WhatsApp support",
    c2p: "Receive WhatsApp messages from your clients directly to your Bitrix24 Contact Center without using your own WhatsApp or getting their business account.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/whatsapp-card-2.png.webp?1764863685915",
    c3h: "Ideal for online sales",
    c3p: "If a person who reached you on WhatsApp is willing to make a purchase, just pick the product from your catalog and generate a payment link so that they could easily pay online.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/whatsapp-card-3.png.webp?1764863685915",

    h2: "Facebook integration",
    p2: "Connect your Facebook profile to the Bitrix24 Contact Center and reply to Facebook messages from your potential and existing customers directly.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/facebook.png.webp?1764863685915",
    
    l5: "Official integration",
    l6: "Facebook comments support",
    l7: "Ideal for online sales",
    l8: "Integrated with CRM",
    l9: "Mobile-friendly",

    c4h: "Official integration",
    c4p:"No workaround solutions required – everything looks tight and works right. The whole thing takes less than one minute to connect.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/facebook-card-1.png.webp?1764863685915",
    c5h:"Integrated with CRM",
    c5p:"Every conversation is saved to your Bitrix24 CRM. For returning customers, conversations are added to the respective lead or deal. For first-time visitors, a new entry is created in CRM.Every conversation is saved to your Bitrix24 CRM. For returning customers, conversations are added to the respective lead or deal. For first-time visitors, a new entry is created in CRM.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/facebook-card-2.png.webp?1764863685915",
    c6h:"Facebook comments support",
    c6p:"You can additionally connect Facebook messages to your Bitrix24 account and reply to the comments you receive on Facebook directly from your Bitrix24 Contact Center.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/facebook-card-3.png.webp?1764863685915",

    h3: "Instagram integration",
    p3: "Provide a native shopping experience to your customers while managing all the interactions (including payments) directly inside Bitrix24.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/instagram.png.webp?1764863685915",

    l10: "Smooth shopping experience for customers",
    l11: "Smooth sales experience for you",
    l12: "Ideal for sales through social media",
    l13: "Mobile-friendly",
    l14: "Native shopping experience",

    c7h: "Official integration",
    c7p:"Connect your Instagram profile to Bitrix24 in just a few clicks and start scaling your business across Instagram like you never did before.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/instagram-card-1.png.webp?1764863685915",
    c8h:"Smooth shopping experience",
    c8p:"Your customers can shop your products, make orders, and pay for them without leaving the app – all inside Instagram.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/instagram-card-2.png.webp?1764863685915",
    c9h:"Smooth sales experience",
    c9p:"Manage the whole sales process inside your Bitrix24 CRM: reply to DMs, share product images, and send payment links.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/social-selling/instagram-card-3.png.webp?1764863685915",

  },

  
  page_3:{
    h:"Website forms",
    p:"Bitrix24 features a wide variety of customizable website forms that you can place on your Bitrix24-made site, landing page, or online store. Every submitted form can be automatically added to your CRM as a lead, deal, or contact (depending on your preferences).",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/header-human-website-forms.png.webp?1764863685915",

    h1:"Standard and custom forms",
    p1:"Depending on the type of information you want to collect and where you would like to place your web forms, you can choose from a wide variety of forms available to you in Bitrix24 – from standard to completely custom. ",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/forms.png.webp?1764863685915",

    l1:"Over 10 web form templates",
    l2:"Drag and drop form builder",
    l3:"Mobile-friendly",
    l4:"Integrated with Bitrix24 CRM",

    c1h:"Choose from a wide variety of web forms",
    c1p:"Contact forms, order forms, survey forms, feedback forms, callback forms, event registration forms, forms with conditional fields, and many more.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/forms-card-1.png.webp?1764863685915",
    c2h:"CRM form design",
    c2p:"Can't find a form that's right for your needs? Just create one from scratch using our intuitive, block-based CRM form builder.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/forms-card-2.png.webp?1764863685915",
    c3h:"Integrated with Bitrix24 CRM",
    c3p:"The lead generation forms you create in Bitrix24 are fully integrated with our CRM. Every submitted form, phone call, or chat message results in a new lead or deal added to CRM.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/forms-card-3.png.webp?1764863685915",
    
    h2:"Web forms for online marketing",
    p2:"The beauty of Bitrix24 is that you don't need to integrate web forms with CRM because it's already done in our product. This makes creating web forms and converting visitors to leads an easy, intuitive, and enjoyable process.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/web-forms.png.webp?1764863685915",

    l5:"Various display options",
    l6:"CRM integrations",
    l7:"Email integrations",
    l8:"Required fields",
    l9:"Integrated with Google Analytics",

    c4h:"Various web form display options",
    c4p:"Bitrix24 also allows you to choose how exactly you want your online forms to be presented: embedded on your website page, displayed in a pop-up window (with or without a time delay), and others.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/web-forms-card-1.png.webp?1764863685915",
    c5h:"Required fields",
    c5p:`Make certain fields "required" by marking them so in the web form menu. If a site visitor tries to send this form without completing such fields, the form will show a relevant message and prompt the user to fill in the required field(s).`,
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/web-forms-card-2.png.webp?1764863685915",
    c6h:"Integrated with Google Analytics",
    c6p:"Using Google Analytics data gives you a wealth of information regarding your web form performance and provides potential ideas for increasing leads. Connect GA and track conversions with web forms!",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-forms/web-forms-card-3.png.webp?1764863685915",
  },

  page_4:{
    h:"Landing page builder",
    p:"Create beautiful landing pages without having to write a single line of code. Just pick a template, customize it to match your stylistic and marketing needs, add content, and publish it! Integrated with our CRM and Google Analytics, this is a perfect online sales tool for your business.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/header-human-landing-pages.png.webp?1764863685915",

    h1:"No-code landing page creator",
    p1:"Our workspace features a free landing page tool that allows you to easily create beautiful landing pages that look good and sell well.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/site-creator.png.webp?1764863685915",

    l1:"100+ templates",
    l2:"Mobile-friendly, responsive design",
    l3:"Free domain and hosting",
    l4:"AI-generated landing pages",

    c1h:"100+ landing page templates",
    c1p:"From restaurants to hospitals, we have a template for almost any business. Just pick the one you like and customize it using our landing page maker.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/site-creator-card-1.png.webp?1764863685915",
    c2h:"Easy to add and manage content",
    c2p:"Add, remove, and customize elements in our free landing page builder. Change fonts, styles, colors, add images, videos, texts – the whole process is super-easy and intuitive.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/site-creator-card-2.png.webp?1764863685915",
    c3h:"AI-generated landing pages",
    c3p:"Create a landing page in a matter of minutes using just a prompt. Based on the prompt, our AI assistant CoPilot will come up with an appropriate design, copy, images, and web forms.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/site-creator-card-3.png.webp?1764863685915",
    
    h2:"Lead capture forms",
    p2:"Bitrix24 free landing page software features a wide variety of customizable lead capture forms that you can place on your landing page. Every submitted form gets automatically added to your CRM as a lead, deal, or contact (depending on your preferences).",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/forms.png.webp?1764863685915",

    l5:"Wide variety of web forms",
    l6:"CRM form designer",
    l7:"Mobile-friendly",
    l8:"Integrated with Bitrix24 CRM",
    l9:"Lead capture forms",

    c4h:"Choose from a wide variety of webforms",
    c4p:"We've got plenty of pre-made forms for every occasion: contact forms, order forms, survey forms, feedback forms, callback forms, event registration forms, forms with conditional fields, and many more.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/forms-card-1.png.webp?1764863685915",
    c5h:"Custom CRM form designer",
    c5p:"Can't find a CRM form that's right for your needs? Just create one from scratch using our intuitive, block-based CRM form designer and build a landing page around it.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/forms-card-2.png.webp?1764863685915",
    c6h:"Integrated with Bitrix24 CRM",
    c6p:"The lead capture forms you create for your product landing page in Bitrix24 are fully integrated with our CRM. Every submitted form, phone call, or chat message result in a new lead or deal added to CRM.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/forms-card-3.png.webp?1764863685915",


    h3:"Booking",
    p3:"Make the most of your resources with Booking – an ideal tool for beauty salons, clinics, rental services, or any other business that relies on appointments. Integrated with our CRM, this tool allows you not only to keep your calendar full, but also retain clients.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/booking.png.webp?1764863685915",

    l10:"Automated reminders and notifications via SMS and WhatsApp",
    l11:"Client data gets saved to CRM",
    l12:"Overbooking and waiting list",
    l13:"Booking forms and self-booking",
    l14:"Ideal for businesses that rely on appointments",

    c7h:"Maximize resource utilization",
    c7p:"Booking helps you fill every slot effectively, ensuring your resources are used to their fullest potential. With customizable forms for self-booking, your clients get a simple and accessible way to schedule appointments, keeping your calendar busy while minimizing downtime.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/booking-card-1.png.webp?1764863685915",
    c8h:"Automated reminders and notifications",
    c8p:"Reduce no-shows and enhance customer satisfaction with automated booking reminders. Clients receive timely notifications to confirm or modify their appointments, saving you time and keeping your schedule optimized.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/booking-card-2.png.webp?1764863685915",
    c9h:"Integrated with CRM",
    c9p:"Every booking can be transformed into a lead or deal to capture client data and ensure no potential business opportunity is overlooked. Plus, with your client information stored securely in one place, you can easily leverage it for future marketing campaigns.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/booking-card-3.png.webp?1764863685915",

    h4:"Automated funnels",
    p4:"Thanks to the integration with our CRM and the rest of the Bitrix24 tools, you can set up an automated sales funnel and lead your clients all the way from their first visit to repeat business.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/funnels.png.webp?1764863685915",

    l15:"Customizable CRM rules and triggers",
    l16:"Email marketing",
    l17:"Invoices",
    l18:"Sales tunnels",
    

    c10h:"Automation rules and triggers",
    c10p:`Set an automation rule (e.g., "send an email or SMS to the client") that will get activated once a lead (or deal) moves to a new status in the sales pipeline. Automation rules can specify the activation time and the action: task, notification, email, call or any other action of your choice.`,
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/funnels-card-1.png.webp?1764863685915",
    c11h:"Sales tunnels",
    c11p:"Sales tunnels can be used to connect different sales pipelines. For example, when a deal reaches a certain status in pipeline A (e.g., sales), it automatically gets copied and transferred to pipeline B (e.g., delivery or installation) to continue its path to success there.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/funnels-card-2.png.webp?1764863685915",
    c12h:"Online payments",
    c12p:"Bitrix24 allows you to receive payments for your products and services online – just generate a payment link from a deal and send this link to the client. When the payment is complete, you receive a confirmation, and the client gets a proof of payment.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/funnels-card-3.png.webp?1764863685915",


    h5:"Google Analytics integration",
    p5:"Bitrix24 offers you a quick and easy way to connect Google Analytics when you create a landing page. Google Analytics provides a wealth of information regarding your free landing page performance and gives you potential ideas for improving the conversion rate.",
    i5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/analytics.png.webp?1764863685915",

    l19:"Supports Google Analytics 4",
    l20:"Site visitor data and insights",
    l21:"Easy to connect",
    l22:" Provides info  about landing page",
    

    c13h:"Easy to connect",
    c13p:"The whole process takes only a couple of minutes – all you have to do is fill in a few required fields and copy the Measurement ID.",
    c13i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/analytics-card-1.png.webp?1764863685915",
    c14h:"Google Analytics 4 support",
    c14p:"Since Universal Analytics stopped processing new data in standard properties in July 2023, we recommend connecting Google Analytics 4.",
    c14i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/analytics-card-3.png.webp?1764863685915",
    c15h:"Site visitor data and insights",
    c15p:"Use Google Analytics to track events that occur on your Bitrix24-made website or landing page, such as page views, bounce rate, downloads, submitted forms, and others.",
    c15i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/landing-pages/analytics-card-2.png.webp?1764863685915"
  },


  page_5:{
    h:"Online store & ecommerce tools",
    p:"Design and launch your online store, get your first customers and orders – all within a day, all with Bitrix24. Everything you need to run a successful online business is here – CRM, product catalog, email marketing, order management system, payment processing, and more.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/header-human-online-store.png.webp?1764863685915",

    h1:"Online store builder",
    p1:"Use our drag-and-drop store builder to design and launch your very own online store in Bitrix24, complete with CRM, product tracking, inventory management, and online payments.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-store-builder.png.webp?1764863685915",

    l1:"Wide choice of templates",
    l2:"Responsive online store",
    l3:"Product catalog",
    l4:"Product inventory",

    c1h:"Online store templates",
    c1p:"Our shop builder features plenty of beautiful, user-friendly e-shop templates to please even the most demanding customers and business owners.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-store-builder-card-1.png.webp?1764863685915",
    c2h:"Multi-channel inventory management",
    c2p:"Every DIY online store you create in Bitrix24 comes with a product catalog, order management, and inventory management tools.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-store-builder-card-2.png.webp?1764863685915",
    c3h:"Integrated with CRM",
    c3p:"All the orders and customers (along with their contact details) are automatically added to your Bitrix24 CRM.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-store-builder-card-3.png.webp?1764863685915",
    
    h2:"Inventory management",
    p2:"Track, audit, and manage your stock across multiple warehouses in the Bitrix24 ecommerce inventory software. Every item in your catalog is accounted for and can be traced from the supplier to the customer.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/inventory-management.png.webp?1764863685915",

    l5:"Full set of inventory management tools",
    l6:"Integrated with online store, CRM, product catalog",
    l7:"Ideal for ecommerce",
    l8:"Multiple warehouses",
    l9:"Track, audit, and manage stock ",

    c4h:"Complete inventory management",
    c4p:"Manage multiple warehouses, create inventory documents, process stock receipts, sales orders, write-offs, transfers, audits, and more.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/inventory-management-card-1.png.webp?1764863685915",
    c5h:"Custom access permissions",
    c5p:"Set the access level for each individual employee and decide which actions are available to them: creating new products and applying discounts, editing stock receipts, managing prices, etc.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/inventory-management-card-2.png.webp?1764863685915",
    c6h:"Multiple warehouses",
    c6p:"You will always know how many products have been sold and whether you need to replenish your stock. Once an item has been sold and the deal is closed, our system updates your stock balance.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/inventory-management-card-3.png.webp?1764863685915",


    h3:"Product catalog",
    p3:"The product catalog in Bitrix24 has everything you need to manage your sales. Don't let the word 'product' deceive you: there is a separate entity called 'service' that you can use instead (if your business is service-based).",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/product-catalog.png.webp?1764863685915",

    l10:"Intuitive navigation",
    l11:"Custom fields",
    l12:"Integrated with CRM and online store",
    l13:"Integrated with online payments",
    l14:"Manage your sales",

    c7h:"Easy to organize and manage",
    c7p:"Add product in one click, create product categories and subcategories, import products from an existing catalog, add units of measurement, discount price, images/videos, and other parameters.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/product-catalog-card-1.png.webp?1764863685915",
    c8h:"Customizable to your liking",
    c8p:"Not only can you separate products from services in your catalog, but also add custom fields that are unique to your business (e.g., dimensions, trim level, weight, and so on).",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/product-catalog-card-2.png.webp?1764863685915",
    c9h:"Ideal for online sales",
    c9p:"Our product catalog is integrated with CRM and our online shop creation tool, which means that every product your customer adds to their cart results in a deal in CRM. From there, you can receive payments.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/product-catalog-card-3.png.webp?1764863685915",

    h4:"Online payments",
    p4:"Bitrix24 allows you to receive payments for your products and services online – just generate a payment link from a deal and send this link to the client. When the payment is complete, you receive a confirmation, and the client gets a proof of payment.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-payments.png.webp?1764863685915",

    l15:"Ideal for small businesses",
    l16:"Secure payment solutions",
    l17:"Integrated with CRM and online store",
    l18:"Fully trackable checkout process",
    

    c10h:"One-click payments",
    c10p:"Pick a product from your catalog, generate a payment link and send it to your client. The client opens the link and chooses their preferred payment method.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-payments-card-1.png.webp?1764863685915",
    c11h:"Proof of payment",
    c11p:"Once you've received the money from a client, the proof of payment will be sent to their smartphone.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-payments-card-2.png.webp?1764863685915",
    c12h:"Payment processing and tracking",
    c12p:"Your sales reps can always check the current payment status and track the payment process in real-time.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/online-store/online-payments-card-3.png.webp?1764863685915",
  },


  page_6:{
    h:"Mobile sites and stores",
    p:"All the websites, landing pages, and online stores that you create with the Bitrix24 mobile website builder are 100% mobile-friendly, responsive, and packed with m-commerce tools.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/header-mobile-sites.1366w.png.webp?1764863685915",

    h1:"Online store builder",
    p1:"Design and launch your own mobile-friendly website in Bitrix24, complete with CRM, product catalog, inventory management, and online payments.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-store-builder.png.webp?1764863685915",

    l1:"Wide choice of templates",
    l2:"Mobile CRM",
    l3:"Product catalog",
    l4:"Inventory management",

    c1h:"Online store templates",
    c1p:"Plenty of beautiful e-shop templates to please even the most demanding customers and business owners. Before publishing, you can always preview your website on a mobile device.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-store-builder-card-1.png.webp?1764863685915",
    c2h:"Order and inventory management",
    c2p:"The mobile-responsive stores you create in Bitrix24 come with a product catalog, order management systems, and inventory management tools.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-store-builder-card-2.png.webp?1764863685915",
    c3h:"Integrated with CRM",
    c3p:"All the orders and customers (along with their contact details) are automatically added to your Bitrix24 CRM.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-store-builder-card-3.png.webp?1764863685915",
    
    h2:"Product catalog",
    p2:`The product catalog in Bitrix24 has everything you need to manage your orders and sales. We even have a separate entity called "service" that you can use if your business is service-based.`,
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/product-catalog.png.webp?1764863685915",

    l5:"Intuitive navigation",
    l6:"Custom fields",
    l7:"Ideal for mobile commerce",
    l8:"Integrated with inventory management",
    l9:"Integrated with online payments",

    c4h:"Easy to organize and manage",
    c4p:"Add products in one click, create categories and subcategories, import products from an existing catalog, add units of measurement, discount price, images/videos, and more.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/product-catalog-card-1.png.webp?1764863685915",
    c5h:"Customizable to your liking",
    c5p:"Not only can you separate products from services in your catalog, but also add custom fields that are unique to your business (e.g., dimensions, trim level, weight, and so on).",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/product-catalog-card-2.png.webp?1764863685915",
    c6h:"Ideal for online sales",
    c6p:"Our product catalog is integrated with CRM and website builder, allowing you to set up proper ecommerce for mobile users. Every product added to the cart results in a deal in your CRM.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/product-catalog-card-3.png.webp?1764863685915",


    h3:"Client management",
    p3:"Every online store you create in Bitrix24 is automatically integrated with our CRM, meaning that all our leads, deals, contacts, products, invoices, and payments can be all managed from one place.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/client-management.png.webp?1764863685915",

    l10:"Leads, deals, contacts",
    l11:"Invoices and online payments",
    l12:"Product catalog",
    l13:"Web forms",
    l14:"Third-party apps and integrations",

    c7h:"CRM integration",
    c7p:"Every submitted form, incoming phone call, chat message, or a product added to the cart will result in a new lead or deal automatically added to your CRM.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/client-management-card-1.png.webp?1764863685915",
    c8h:"Leads, deals, and contacts",
    c8p:"Work with leads from your smartphone: set up custom stages, forms, and fields, convert them to deals, contacts, or companies, quickly pull up a lead/deal from your CRM to view its properties.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/client-management-card-2.png.webp?1764863685915",
    c9h:"Third-party apps and integrations",
    c9p:"Browse Bitrix24 Market to find useful third-party apps and integrations with online shopping platforms that will enhance your Bitrix24 functionality.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/client-management-card-3.png.webp?1764863685915",

    h4:"Online payments",
    p4:"You can request and receive payments right inside Bitrix24, ensuring proper mobile checkout for your clients.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-payments.png.webp?1764863685915",

    l15:"Send payment links via email, SMS, or messenger",
    l16:"Ideal for mobile shopping",
    l17:"Integrated with Bitrix24 website builder",
    l18:"Payment status tracking",
    
    c10h:"Convenient payment process",
    c10p:"Pick a product from the catalog, generate a payment link and send it to the client. The client opens the link and chooses the preferred payment method.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-payments-card-1.png.webp?1764863685915",
    c11h:"Proof of payment",
    c11p:"Once you've received the money from a client, the proof of payment will be sent to their smartphone.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-payments-card-2.png.webp?1764863685915",
    c12h:"Payment tracking",
    c12p:"Your sales reps can always check the current payment status and track the payment process in real-time.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/mobile-sites-and-stores/online-payments-card-3.png.webp?1764863685915",
  },

  page_7:{
    h:"Website widget",
    p:"When creating a website, landing page, or online in Bitrix24, you can add an optional website chat widget that's completely customizable and may feature a live chat, CRM form, and callback option. A great tool to improve your website conversion rate and increase online sales! ",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/header-human-website-widget.png.webp?1764863685915",

    h1:"Live chat",
    p1:"Enable a live chat widget for your website to communicate with your visitors and provide instant customer support. If it's a returning customer, the conversation will be saved to the respective lead or deal in your CRM. If it's a first-time visitor, a new entry will be automatically created.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/live-chat.png.webp?1764863685915",

    l1:"24/7 live chat widget",
    l2:"Canned replies",
    l3:"Rules and routing",
    l4:"Integrated with CRM",

    c1h:"Routing and conversation transfers",
    c1p:"Use the default settings or create a custom set of rules to manage, route, and distribute customer chats among your team members.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/live-chat-card-1.png.webp?1764863685915",
    c2h:"Conversation rating",
    c2p:"Every conversation via the web chat widget can be rated by a customer and/or your team supervisor. The data is shown inside the Contact Center in your Bitrix24 CRM.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/live-chat-card-2.png.webp?1764863685915",
    c3h:"Canned replies",
    c3p:"Create a set of canned replies for your free chat widget. They can be used to keep customers on hold when your support team is not available.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/live-chat-card-3.png.webp?1764863685915",
    
    h2:"Messengers",
    p2:"Add popular messengers to the live chat widget for your Bitrix-24 made website to offer your site visitors more ways to connect with your brand.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/messengers.png.webp?1764863685915",

    l5:"WhatsApp, Telegram, Viber",
    l6:"Facebook Messenger",
    l7:"Integrated with CRM",
    l8:"Customizable widget design and layout",
    l9:"Mobile-friendly",

    c4h:"Supports all popular messengers",
    c4p:"You can choose to add any (or all) of these messengers to your messenger widget: WhatsApp, Telegram, Viber, and Facebook Messenger.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/messengers-card-1.png.webp?1764863685915",
    c5h:"Integrated with CRM",
    c5p:"Every conversation is saved to your Bitrix24 CRM. For returning customers, conversations are added to the respective lead or deal. For first-time visitors, a new entry is created in CRM.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/messengers-card-2.png.webp?1764863685915",
    c6h:"Customizable widget design and layout ",
    c6p:"You can configure the free chat widget color scheme, placement on the website, appearance (instant or with a delay), working time preferences, and more.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/messengers-card-3.png.webp?1764863685915",


    h3:"Callback request",
    p3:"Enabling a callback form on your website widget allows you to get a potential client's phone number and quickly call them back.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/callback-request.png.webp?1764863685915",

    l10:"Free callback widget",
    l11:"Custom text, fields, and layout",
    l12:"Integrated with CRM",
    l13:"Integrated with telephony",
    l14:"Mobile-friendly",

    c7h:"Custom text, fields, and layout",
    c7p:"Using our CRM form designer, you can configure the callback form layout, fields, text, placement on the website, and other parameters.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/callback-request-card-1.png.webp?1764863685915",
    c8h:"Integrated with CRM and telephony",
    c8p:"When a site visitor leaves their phone number in the callback form, you receive an incoming call. When you pick it up, an outgoing call is made to the client. All the information is saved to CRM.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/callback-request-card-2.png.webp?1764863685915",
    c9h:"Never lose a client",
    c9p:"Callback widget forms are a great way to retain your customers and increase your website or landing page conversion rate.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/website-widget/callback-request-card-3.png.webp?1764863685915",
  },

  page_8:{
    h:"Online marketing tools",
    p:"Bitrix24 features a site builder with built-in marketing tools to help you reach out to your clients across various channels.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/header-human-marketing.png.webp?1764863685915",

    h1:"Web forms",
    p1:"With a CRM form designer at your disposal, you can easily create effective lead capture forms for websites and stores and start adding new leads to your Bitrix24 CRM in no time.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/forms.png.webp?1764863685915",

    l1:"Drag and drop web form designer",
    l2:"Over 10 web form templates",
    l3:"Custom forms",
    l4:"Easy online store creation with marketing automation",

    c1h:"A wide variety of web forms",
    c1p:"Any form you need and for any occasion: contact, order, survey, feedback forms, callback, event registration, and many more.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/forms-card-1.png.webp?1764863685915",
    c2h:"Custom forms",
    c2p:"Can't find the right template? Just create a custom web form from scratch using our intuitive, no-code CRM form builder.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/forms-card-2.png.webp?1764863685915",
    c3h:"Integrated with Bitrix24 CRM",
    c3p:"Using our ecommerce platform with marketing tools, you can have every submitted form on your website added to the Bitrix24 CRM as a new lead or deal.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/forms-card-3.png.webp?1764863685915",
    
    h2:"Live chat widget",
    p2:"Our easy website builder with marketing automation features a customizable live chat widget that allows you to add popular messengers to engage customers with the chat on your site and store.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/widget.png.webp?1764863685915",

    l5:"Callback request",
    l6:"Integrated with social media",
    l7:"Integrated with messengers",
    l8:"Integrated with CRM",
    l9:"Mobile-friendly",

    c4h:"Customizable widget design and layout",
    c4p:"You can configure the color scheme of the widget, its placement, appearance (instant or with a delay), working time preferences, and more.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/widget-card-1.png.webp?1764863685915",
    c5h:"Callback request rating",
    c5p:"Enabling a callback form on your website widget allows you to get a potential client's phone number and quickly call them back.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/widget-card-2.png.webp?1764863685915",
    c6h:"Supports all popular messengers",
    c6p:"You can choose to add any (or all) of these messengers to your live chat widget: WhatsApp, Telegram, and Facebook Messenger.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/widget-card-3.png.webp?1764863685915",


    h3:"Site and store marketing",
    p3:"The Bitrix24 marketing-powered website creation platform features a wide choice of tools to nurture your client base and reach out to them with your promotional message: email, SMS, telephony, Facebook and Google Ads, and more.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/sites.png.webp?1764863685915",

    l10:"Email marketing (up to 1,000,000 emails/mo)",
    l11:"Editable HTML email templates",
    l12:"Smart email and automation",
    l13:"Facebook lookalike audiences",
    l14:"Segmentation",

    c7h:"Powerful email marketing",
    c7p:"Use one of our templates or create your own email from scratch, pick a segment from your client base, and bulk send up to 1,000,000 emails per month.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/sites-card-1.png.webp?1764863685915",
    c8h:"Create ad audiences based on segments",
    c8p:"Select a segment in your client base and send it directly to your ad network account on Google or Facebook, showing ads only to the audiences who have interacted with your brand.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/sites-card-2.png.webp?1764863685915",
    c9h:"Advertise your products with promoted posts",
    c9p:"Turn any post on your Facebook or Instagram into a selling ad, allowing your potential customers to shop your products inside their social media platform of choice.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/sites-card-3.png.webp?1764863685915",

    h4:"Google Analytics integration",
    p4:"Connect Google Analytics to your Bitrix24-made website to collect information regarding your site performance and get potential ideas for improving the conversion rate and marketing ROI.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/analytics.png.webp?1764863685915",

    l15:"Supports Google Analytics 4",
    l16:"Site visitor data and insights",
    l17:"Easy to connect",
    l18:"Analytics and reporting",
    

    c10h:"Easy to connect",
    c10p:"The whole process takes only a couple of minutes – all you have to do is fill in a few required fields and copy the Measurement ID.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/analytics-card-1.png.webp?1764863685915",
    c11h:"Site visitor data and insights",
    c11p:"Use Google Analytics to track events that occur on your Bitrix24-made website or landing page, such as page views, bounce rate, downloads, submitted forms, and others.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/analytics-card-2.png.webp?1764863685915",
    c12h:"Google Analytics 4 support",
    c12p:"Since Universal Analytics stopped processing new data in standard properties in July 2023, we recommend connecting Google Analytics 4.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/websites/marketing/analytics-card-3.png.webp?1764863685915",
  },
};


const side_5={
  page_1: {
    h: "Employee management",
    p: "Bitrix24 employee management system brings people, tools, and information in your company together in the most intuitive and productive way.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/header-human-employee-management.png.webp?1764863685915",

    h1: "Employee profiles",
    p1: "Employee profiles in Bitrix24 are a nice and simple way for a person to present themselves. In addition to the basic information like name, age, position, and phone number, our employee profile also contains all the appreciation badges received by that person.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/employee-profiles.png.webp?1764863685915",

    l1: "Employee relationship management",
    l2: "Appreciations badges",
    l3: "Tags",
    l4: "Quick employee search",

    c1h: "Employee directory",
    c1p: "Centralized searchable employee directory for quick access to employee data, including contact details, tasks, calendar, workgroups, drive, and their activity in the feed.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/employee-profiles-card-1.png.webp?1764863685915",
    c2h: "Appreciation badges",
    c2p: "Congratulate a team member on their birthday, thank your colleague for doing a great job, or simply give them a shout-out! Appreciation badges are a great tool for encouraging your team.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/employee-profiles-card-2.png.webp?1764863685915",
    c3h: "Tags",
    c3p: "In the Bitrix24 employee profile app, every person can add various tags to their profile to connect with other people on your team who share the same interests.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/employee-profiles-card-3.png.webp?1764863685915",

    h2: "Company structure",
    p2: "Company structure chart is a great visual representation of the hierarchy in your team. As an administrator, you can easily see who belongs to which department and manage their access permissions.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/company-structure.png.webp?1764863685915",
    
    l5: "Company organizational structure",
    l6: "Staff changes",
    l7: "Role-based access permissions",
    l8: "Employee efficiency",
    l9: "Employee data",

    c4h:"Company structure software",
    c4p:"Create departments and sub-departments, assign supervisors and their deputies, add new employees, and move people from one position to another easily. You can also hide certain parts of your hierarchy from public view for security reasons.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/company-structure-card-1.png.webp?1764863685915",
    c5h:"Role and team management",
    c5p:"Our company structure hierarchy allows you to assign employees to multiple roles or create cross-functional teams. All changes automatically reflect across tools like access permissions and reporting lines (including dismissed employees, who lose all access).",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/company-structure-card-2.png.webp?1764863685915",
    c6h:"Employee data",
    c6p:"A department manager can easily open the employee profile page of their subordinate to get quick information on this person's tasks and scheduled events or contact them via chat or video call.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/company-structure-card-3.png.webp?1764863685915",

    h3: "Active Directory",
    p3: "Add your team members to the Bitrix24 employee profile software and manage their access via Microsoft Azure Active Directory. With a single sign-on system, your employees will log in to Bitrix24 without having to use a password.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/active-directory.png.webp?1764863685915",

    l10: "Easy to connect and configure",
    l11: "Single Sign-On (SSO)",
    l12: "Cross-Domain Identity Management (SCIM)",
    l13: "Login history",
    l14: "Access via Microsoft Azure Active Directory.",

    c7h: "Easy to connect and configure",
    c7p:"Connecting and configuring Single Sign-On for your employees in Bitrix24 takes only a few minutes. We will guide you through the whole process.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/active-directory-card-1.png.webp?1764863685915",
    c8h:"Single Sign-On",
    c8p:"With the Single Sign-On (SSO) technology, your employees will be able to log in to several Bitrix24 applications or sites without having to remember passwords for each application.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/active-directory-card-2.png.webp?1764863685915",
    c9h:"Login history",
    c9p:"Get detailed logs of every user action in your Bitrix24 account and see where, when, and from which device your employees logged in.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/employee-management/active-directory-card-3.png.webp?1764863685915",
  },

  page_2: {
    h: "Culture and employee engagement",
    p: "Increase employee engagement, foster meaningful communication, and create a friendly, positive work environment using the Bitrix24 employee engagement program.",
    i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/header-human-culture-and-engagement.png.webp?1764863685915",

    h1: "Feed",
    p1: "Feed in Bitrix24 is the place where you can read company and team news, watch announcements, take part in polls and discussions in comments, or share a post of your own with selected team members or the whole company.",
    i1: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/feed.png.webp?1764863685915",

    l1: "Personalized feed",
    l2: "Corporate announcements",
    l3: "Polls",
    l4: "Likes and reactions",

    c1h: "Personalized feed",
    c1p: "The corporate feed in Bitrix24 is personalized based on the groups you've joined, the department you're in, and so on. You can write a post for all employees or selected users/groups/departments.",
    c1i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/feed-card-1.png.webp?1764863685915",
    c2h: "Video announcements",
    c2p: "Record a short video and post it as an announcement in the feed to share important news with the team. You can optionally request confirmation to make sure everyone has seen the message.",
    c2i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/feed-card-2.png.webp?1764863685915",
    c3h: "Polls",
    c3p: "Launch a poll in the feed to find out your team members' opinion on a particular topic, whether it's the new logo design or where to hang out this Friday.",
    c3i: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/feed-card-3.png.webp?1764863685915",

    h2: "Bitrix24 Vibe",
    p2: "Personalize the start page in your Bitrix24 account to have quick, one-click access to important team and company information.",
    i2: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/vibe.png.webp?1764863685915",
    
    l5: "Quick and easy access to important info",
    l6: "Three default start page templates",
    l7: "Dozens of widgets to choose from",
    l8: "Add/remove widgets for more personalization",
    l9: "Custom templates available from partners",

    c4h: "Quick access to team and company data",
    c4p:"Bitrix24 Vibe is a great way to create shortcuts for specific elements of the product (such as the Feed and workflows) and bring up the important information (e.g., employee activity) that gets updated in real time.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/vibe-card-1.png.webp?1764863685915",
    c5h:"Personalized start page",
    c5p:"Choose from 3 default start page templates with dozens of customizable widgets that you can add, remove, move around, and edit to your liking. If you need even more personalization, order a completely custom template from our partners.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/vibe-card-2.png.webp?1764863685915",
    c6h:"Great for employee engagement",
    c6p:"Just one glance at the start page gives you a nice scope of the company's activity. With widgets like employee activity, birthdays, and others, you can create a warm, welcoming experience for both existing employees and newcomers.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/vibe-card-3.png.webp?1764863685915",

    h3: "Engagement",
    p3: "Bitrix24 helps you to encourage social interactions and improve company culture within your team in a natural way that's tied in with their work.",
    i3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/engagement.png.webp?1764863685915",

    l10: "Appreciation badges",
    l11: "Comments",
    l12: "Virtual presence indicator",
    l13: "Tags",
    l14: "Discussions",

    c7h: "Appreciation badges",
    c7p:"Congratulate a team member on their birthday, thank your colleague for doing a great job, or simply give them a shout-out! Appreciation badges are a great tool for building company culture.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/engagement-card-1.png.webp?1764863685915",
    c8h:"Tags",
    c8p:"Every employee can add various tags to their profile to connect with other people on your team who share the same interests, improving employee culture and engagement.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/engagement-card-2.png.webp?1764863685915",
    c9h:"Virtual presence indicator",
    c9p:"Bitrix24 employee engagement app shows you which employees are currently online and which have already finished their working day.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/engagement-card-3.png.webp?1764863685915",

    h4:"Comments and reactions",
    p4:"Comments in Bitrix24 are a quick and easy way to discuss work-related issues and share important information with your team. Likes, reactions, and quotes add a bit of human touch to the usual office communication routine.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/comments-and-reactions.png.webp?1764863685915",

    l15:"Comments in tasks and feed",
    l16:"Notifications and mentions",
    l17:"Likes and reactions",
    l18:"Works from smartphones",
    

    c10h:"Effortless communication",
    c10p:"Leave comments under tasks or posts in the feed, reply and react to comments left by others. This is a great way to discuss work-related issues and exchange opinions with your teammates.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/comments-and-reactions-card-1.png.webp?1764863685915",
    c11h:"Likes and reactions",
    c11p:"Too busy to write a comment? Just let your colleagues know you've seen and understood their message by simply leaving a like or choosing an appropriate reaction.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/comments-and-reactions-card-2.png.webp?1764863685915",
    c12h:"Notifications and mentions",
    c12p:"Anytime you want to get someone's attention, just mention that person in a comment, after which they will get notified and be able to respond from their PC, laptop, or mobile device.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/culture-and-engagement/comments-and-reactions-card-3.png.webp?1764863685915",

  },
 
  page_3:{
    h:"Mobile HR tools",
    p:"With the Bitrix24 HR mobile app, you can easily automate routine operations and streamline your workflows to achieve the ultimate efficiency and get more things done in less time.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/header-human-information-management.png.webp?1764863685915",

    h1:"Messenger",
    p1:"Our messenger is a safe and secure way of keeping all your team communications inside the company. Create one-on-one and team chats, launch polls, use channels for corporate communication, share files and forward messages.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/messenger.png.webp?1764863685915",

    l1:"Likes, reactions, and emojis",
    l2:"Chat history search",
    l3:"Message auto-delete",
    l4:"Polls to collect feedback & opinions",

    c1h:"One team – one messenger",
    c1p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/messenger-card-1.png.webp?1764863685915",
    c2h:"Channels",
    c2p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/messenger-card-2.png.webp?1764863685915",
    c3h:"Auto-delete for peace of mind",
    c3p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/messenger-card-3.png.webp?1764863685915",
    
    h2:"Video calls",
    p2:"Being one of the most prominent HR management mobile apps, our workspace features video calls and conferencing. Start an online meeting right from a chat, an event in your calendar, or directly from any task.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/video-calls.png.webp?1764863685915",

    l5:"100+ participants",
    l6:"Screen sharing",
    l7:"Custom backgrounds",
    l8:"AI video call analytics",
    l9:"External users",

    c4h:"Ideal for team communication",
    c4p:"Get your team together for a quick online discussion. Share your screen, send over files and links, and enjoy crisp clear audio and video quality even with slow Internet connection.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/video-calls-card-1.png.webp?1764863685915",
    c5h:"AI video call analytics",
    c5p:"Our AI-powered assistant CoPilot can analyze your video calls, providing a detailed report with key discussed points and recommendations on how to increase call productivity.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/video-calls-card-2.png.webp?1764863685915",
    c6h:"Online meetings right where you need them",
    c6p:"Unlike some other mobile HR applications, our workspace allows you to quickly set up an online meeting from a chat, task, calendar event, or even a lead or deal in CRM.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/video-calls-card-3.png.webp?1764863685915",


    h3:"Employee profiles",
    p3:"Employee profiles in the Bitrix24 mobile HR software are a nice and simple way for a person to present themselves. In addition to the basic information like name, age, position, and phone number, our employee profile also contains all the appreciation badges received by that person.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/employee-profiles.png.webp?1764863685915",

    l10:"Employee directory",
    l11:"Appreciations badges",
    l12:"Tags",
    l13:"Quick employee search",
    l14:"Simple to present ",

    c7h:"Employee directory",
    c7p:"Centralized searchable employee directory for quick access to employee data, including contact details, tasks, calendar, workgroups, drive, and their activity in the feed.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/employee-profiles-card-1.png.webp?1764863685915",
    c8h:"Appreciation badges",
    c8p:"Congratulate a team member on their birthday, thank your colleague for doing a great job, or simply give them a shout-out! Appreciation badges are a great tool for encouraging your team.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/employee-profiles-card-2.png.webp?1764863685915",
    c9h:"Tags",
    c9p:"Every employee can add various tags to their profile to connect with other people on your team who share the same interests.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/mobile-hr/employee-profiles-card-3.png.webp?1764863685915",

  },

  page_4:{
    h:"Work management",
    p:"Bitrix24 offers a wide choice of tools to help you manage tasks, track employee performance, improve work planning, and increase team productivity.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/header-human-work-management.png.webp?1764863685915",

    h1:"Employee performance and KPI",
    p1:"Bring your team work efficiency to the next level and achieve more with less, using Bitrix24 employee efficiency tools.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/kpi.png.webp?1764863685915",

    l1:"Time spent on task",
    l2:"Rating by supervisor",
    l3:"Deadline control",
    l4:"Productivity tracking",

    c1h:"Employee performance",
    c1p:"Tasks assigned to a person are tracked in order to measure how many of them were completed on time and without objections. You can view task efficiency by employees and departments.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/kpi-card-1.png.webp?1764863685915",
    c2h:"KPI",
    c2p:"The more an employee has tasks which were completed on time and without objections, the higher their KPI is – that's how you can track work productivity.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/kpi-card-2.png.webp?1764863685915",
    c3h:"Task rating by supervisor",
    c3p:"Every report can be either confirmed or declined, with an optional score – positive or negative. This data is aggregated automatically and can be used later for calculating a person's KPI.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/kpi-card-3.png.webp?1764863685915",
    
    h2:"Work reports",
    p2:"Bitrix24 allows you to receive various kinds of work reports from your team members, all of which are customizable to your liking.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/work-reports.png.webp?1764863685915",

    l5:"Standard and custom reports",
    l6:"Task scoring",
    l7:"Work reports",
    l8:"Automated reports",
    l9:" Customizable your liking",

    c4h:"Standard reports",
    c4p:"Get daily, weekly, and monthly reports from your team members, accept or decline them, write your comments and notes, and evaluate employee performance by rating their work.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/work-reports-card-1.png.webp?1764863685915",
    c5h:"Custom reports",
    c5p:"Using our report wizard, you can create custom reports for departments and even individual employees, with custom fields.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/work-reports-card-2.png.webp?1764863685915",
    c6h:"Automation in reports",
    c6p:"Set a particular report to be automatically repeated every day, week, month, or any other custom reporting period.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/work-reports-card-3.png.webp?1764863685915",


    h3:"Workload management",
    p3:"Track the time your employees spend on a particular task and measure their involvement in projects. This data can be used for more efficient work monitoring and workload planning.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/workload-management.png.webp?1764863685915",

    l10:"Task time tracking",
    l11:"Work schedules",
    l12:"Work time management",
    l13:"Involvement in tasks",
    l14:"Work prioritization",

    c7h:"Involvement in tasks",
    c7p:"Bitrix24 features a chart that shows involvement in tasks, with a detailed breakdown by each employee so that you can see who's doing what at any given moment and how busy they are.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/workload-management-card-1.png.webp?1764863685915",
    c8h:"Work schedules",
    c8p:"Work schedules in Bitrix24 allow you to set clock-in/out times, weekly workdays, and break timings and durations. This is especially helpful for teams that work in shifts.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/workload-management-card-2.png.webp?1764863685915",
    c9h:"Work time tracking",
    c9p:"With an online time clock in Bitrix24, your team can easily start/pause/finish their working day from their phones or laptops. Employee work time data is aggregated and available to you as a supervisor.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/work-management/workload-management-card-3.png.webp?1764863685915",
  },


  page_5:{
    h:"Internal communications tools",
    p:"Bitrix24 corporate communications software has everything you need to build efficient communications in your team – messenger, video calls, comments, announcements, and more.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/header-human-internal-communications.1366w.png.webp?1764863685915",

    h1:"Messenger",
    p1:"Our messenger is a safe and secure way of keeping all your team communications inside the company. Create one-on-one and team chats, launch polls, use channels for corporate communication, share files and forward messages.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/messenger.png.webp?1764863685915",

    l1:"Likes, reactions, and emojis",
    l2:"Chat history search",
    l3:"Message auto-delete",
    l4:"Polls to collect feedback & opinions",

    c1h:"One team – one messenger",
    c1p:"Bitrix24 Messenger ensures swift, productive, and secure communication that's organically tied in with the rest of our collaboration tools and CRM.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/messenger-card-1.png.webp?1764863685915",
    c2h:"Channels",
    c2p:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/messenger-card-2.png.webp?1764863685915",
    c3h:"Auto-delete for peace of mind",
    c3p:"Set custom expiration timers for messages that contain sensitive or time-limited info. Once deleted, it’s gone – permanently removed from our servers for true privacy.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/messenger-card-3.png.webp?1764863685915",
    
    h2:"Online meetings",
    p2:"Online meetings in our communications software are everything you’d expect from top-notch video conferencing software – plus, they’re already integrated into your chats, tasks, projects, calendar, CRM, and other tools.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/online-meetings.png.webp?1764863685915",

    l5:"Custom backgrounds",
    l6:"100+ participants",
    l7:"Screen sharing",
    l8:"Call audio/video recording",
    l9:"AI video call analytics",

    c4h:"HD video and audio",
    c4p:"Our technology maintains stable audio and video quality throughout the call so that you could enjoy crisp sound and clear picture, even with slow Internet connection.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/online-meetings-card-1.png.webp?1764863685915",
    c5h:"Screen sharing",
    c5p:"Share your screen during a video call to show images, presentations, spreadsheets, and other documents to the participants.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/online-meetings-card-2.png.webp?1764863685915",
    c6h:"AI video call analytics",
    c6p:"Our AI-powered assistant CoPilot can analyze your video calls, providing a detailed report with key discussed points and recommendations on how to increase call productivity.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/online-meetings-card-3.png.webp?1764863685915",


    h3:"Feed and announcements",
    p3:"Feed in the Bitrix24 announcement software is the place where you can read company and team news, watch announcements, take part in polls and discussions in comments, or share a post of your own with selected team members or the whole company.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/feed-and-announcements.png.webp?1764863685915",

    l10:"Personalized feed",
    l11:"Video announcements",
    l12:"Polls",
    l13:"Likes and reactions",
    l14:"Comments",

    c7h:"Personalized feed",
    c7p:"The feed in Bitrix24 is personalized based on the groups you've joined, the department you're in, and so on. You can write a post for all employees or selected users/groups/departments.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/feed-and-announcements-card-1.png.webp?1764863685915",
    c8h:"Video announcements",
    c8p:"Record a short video and post it as an announcement in the feed to share important information with your team – a perfect tool for internal communications.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/feed-and-announcements-card-2.png.webp?1764863685915",
    c9h:"Polls",
    c9p:"Launch a poll in the feed to find out your team members' opinion on a particular topic, whether it's the new logo design or where to hang out this Friday.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/internal-communications/feed-and-announcements-card-3.png.webp?1764863685915",
  },

  page_7:{
    h:"Information management software",
    p:"Create files and co-edit documents, store employee data and manage corporate knowledge securely inside Bitrix24.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/header-human-information-management.png.webp?1764863685915",

    h1:"Corporate knowledge base",
    p1:"A single place for you to store all your corporate knowledge and wisdom, our knowledge bases can be easily edited and expanded by all your team members.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/knowledge-base.png.webp?1764863685915",

    l1:"Internal knowledge base software",
    l2:"Supports videos and images",
    l3:"Custom access permissions",
    l4:"Ideal for projects and corporate knowledge management",

    c1h:"Easy to create, edit, and share",
    c1p:"Anyone can create a knowledge base in Bitrix24 – just pick a template and start filling it up with articles, images, videos, or other types of content. Edit on the go and see the changes apply instantly.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/knowledge-base-card-1.png.webp?1764863685915",
    c2h:"Ideal place for corporate knowledge",
    c2p:"People come and go, but information must stay inside your company. Whether it's instructions, checklists, or manuals, you can always store and edit them in the Bitrix24 free knowledge base software.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/knowledge-base-card-2.png.webp?1764863685915",
    c3h:"Customizable access permissions",
    c3p:"You can restrict access to certain information (e.g., sales figures or customer data) by configuring access permissions for a specific knowledge base or for all of them at once.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/knowledge-base-card-3.png.webp?1764863685915",
    
    h2:"Online documents",
    p2:"View, co-edit, and share documents with your colleagues and external users. Create text documents, spreadsheets, and even presentations – all inside Bitrix24.",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/online-documents.png.webp?1764863685915",

    l5:"Online document co-editing",
    l6:"Supports docx, pptx, xlsx, txt, csv",
    l7:"Integrated with Dropbox, Google Drive, OneDrive",
    l8:"Configurable access permissions",
    l9:"View, co-edit, and share documents",

    c4h:"Real-time editing",
    c4p:"Create and edit text documents, spreadsheets, and presentations in real-time. Invite other users (whether they have a Bitrix24 account or not) to co-edit your documents.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/online-documents-card-1.png.webp?1764863685915",
    c5h:"Real-time collaboration",
    c5p:"No matter how many people are co-editing a document, you can always see who's worked on it recently and what changes have been made.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/online-documents-card-2.png.webp?1764863685915",
    c6h:"Document management",
    c6p:"Manage documents via a single dashboard where you can view recent activity and changes. Tweak access permissions and enable document lock to prevent files from accidental editing.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/online-documents-card-3.png.webp?1764863685915",


    h3:"File storage",
    p3:"Bitrix24 provides your company with a cloud file storage for proper information management. Here, you can create, edit, and share any work-related files, access them from both desktop and mobile devices",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/file-storage.png.webp?1764863685915",

    l10:"24/7 access from any device",
    l11:"Safe and secure storage for your data",
    l12:"Integrated with Office 365 and Google Docs",
    l13:"Online documents",
    l14:"Custom access permissions",

    c7h:"Ideal for online collaboration",
    c7p:"Store important files and documents, edit and share them online with your team and external users. Create a group folder for your department or project and invite your teammates to collaborate online.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/file-storage-card-1.png.webp?1764863685915",
    c8h:"Configurable access permissions",
    c8p:"Certain files and folders in your company should not be accessible to everyone (e.g., whether it's your top-secret project data or sales figures). With Bitrix24 Drive, you can restrict access to such files and/or lock them to avoid accidental changes.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/file-storage-card-2.png.webp?1764863685915",
    c9h:"Integrated with popular apps",
    c9p:"Edit documents online via native integration with Google Docs, Office 365, or MS Office Online. If you already have some files stored on your Google Drive or Dropbox, you can easily connect them to your Bitrix24 Drive and migrate the files in just a few clicks.",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/information-management/file-storage-card-3.png.webp?1764863685915",
  },

  page_8:{
    h:"Business process automation",
    p:"With Bitrix24, you can easily automate routine operations and streamline your workflows to increase efficiency and get more things done in less time.",
    i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/header-human-automation.png.webp?1764863685915",

    h1:"Robotic Process Automation (RPA)",
    p1:"Automate any standard business process (document approval, purchase request, expense report, etc.) and save up to 80% of your time on completing routine tasks.",
    i1:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rpa.png.webp?1764863685915",

    l1:"Easy to set up and manage",
    l2:"No-code RPA",
    l3:"Workflow editor",
    l4:"Notifications",

    c1h:"Workflow management",
    c1p:"Our automated workflows can be used to take a document through approval stages, assign tasks, send emails, or notify of an approaching deadline. This way, you can approve a business trip, request a leave, and more.",
    c1i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rpa-card-1.png.webp?1764863685915",
    c2h:"No-code RPA",
    c2p:"Using our intuitive workflow editor, you simply have to list all the stages a document has to go through, select the required action, and assign the responsible person. No coding skills are required whatsoever.",
    c2i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rpa-card-2.png.webp?1764863685915",
    c3h:"Easy to monitor and supervise",
    c3p:"All process-related activity is saved and stored in a single dashboard, so there's no need to open every stage of a process to see the details and history.",
    c3i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rpa-card-3.png.webp?1764863685915",
    
    h2:"Smart Process Automation (SPA)",
    p2:"A smart process in Bitrix24 is a customizable type of element in CRM that allows you to create your own work scenarios. Go beyond deals, lead, and quotes – create and automate your own entities (contractor lists, purchase funnels, document registry, etc.).",
    i2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/spa.png.webp?1764863685915",

    l5:"Easy to set up",
    l6:"Intelligent automation",
    l7:"Wide choice of templates",
    l8:"Integrated with calendar and tasks",
    l9:"Create work scenarios",

    c4h:"Easy to set up",
    c4p:"To create a new smart process, you need to configure its components, set the required fields, and enable CRM bindings by selecting the entities you want to link to this new process.",
    c4i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/spa-card-1.png.webp?1764863685915",
    c5h:"Wide choice of templates",
    c5p:"Use our templates or create a smart process from scratch. Set up custom pipelines, sales funnels, Kanban stages, default access permissions for pipelines, and more.",
    c5i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/spa-card-2.png.webp?1764863685915",
    c6h:"Integrated with other Bitrix24 tools",
    c6p:"For advanced process optimization, you can link your smart process to other CRM entities, calendars, tasks, and even task templates.",
    c6i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/spa-card-3.png.webp?1764863685915",


    h3:"Rules and triggers",
    p3:"Automating certain routine processes via rules and triggers can help you save a great deal of time and eliminate human errors.",
    i3:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rules-and-triggers.png.webp?1764863685915",

    l10:"Easy, no-code setup",
    l11:"Wide choice of standard rules",
    l12:"Custom automation rules",
    l13:"Integrated with CRM and other Bitrix24 tools",
    l14:" Save a great deal of time ",

    c7h:"Easy to set up",
    c7p:"Configuring a task automation rule in the Bitrix24 process automation software takes only a few minutes and does not require any programming skills whatsoever. The whole process is super intuitive and visual.",
    c7i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rules-and-triggers-card-1.png.webp?1764863685915",
    c8h:"Wide choice of operations",
    c8p:"You can automate a wide range of standard, routine operations like creating a task, changing a stage in Kanban, task status, assignee, sending a notification to a particular employee, and more.",
    c8i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rules-and-triggers-card-2.png.webp?1764863685915",
    c9h:"Integrated with CRM and other Bitrix24 tools",
    c9p:"Tasks can be automatically created based on certain triggers and actions in CRM (e.g., when a deal is moved to the next stage, a new task is created for an employee to email an invoice to the client).",
    c9i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/rules-and-triggers-card-3.png.webp?1764863685915",

    h4:"Flows",
    p4:"Flows are a clever way of visualizing tasks that are related to a particular process inside your company or department (e.g., legal documents approval). Creating a flow allows everyone to see what the current workload is and identify bottlenecks to increase work efficiency.",
    i4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/flow.png.webp?1764863685915",

    l15:"Customizable task templates",
    l16:"No more bottlenecks",
    l17:"Real-time workload management",
    l18:"Increased work efficiency",
    

    c10h:"Multiple ways to work with tasks",
    c10p:"To distribute tasks, you can use a queue, assign them manually, or allow the team members to pick pending tasks once they become available.",
    c10i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/flow-card-1.png.webp?1764863685915",
    c11h:"Flow efficiency",
    c11p:"Once your flows start working, you will immediately see if there are any missed deadlines and take the necessary action, which leads to a more balanced and efficient workload management.",
    c11i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/flow-card-2.png.webp?1764863685915",
    c12h:"Real-time workload management",
    c12p:"If the number of tasks in progress exceeds a certain critical value, you will receive a notification and will be able to step in and redistribute the workload more evenly.",
    c12i:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/hr_automation/automation/flow-card-3.png.webp?1764863685915",
  },

 
};


const homeFAQ = [
  {
    query: "What is Bitrix24 CRM?",
    answer: ` 
Bitrix24 CRM is an all-in-one customer relationship management platform that helps businesses manage leads, customers, deals, communication, tasks, and automation in one place.
At Unique Design Consultant, we implement Bitrix24 to improve sales performance and operational efficiency.`
  },
  {
    query: "Who should use Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Bitrix24 CRM is suitable for:</div><br/>
       <li style={{marginLeft:"20px"}}>Small & medium businesses</li>
       <li style={{marginLeft:"20px"}}>Sales & service teams</li>
       <li style={{marginLeft:"20px"}}>Real estate, clinics, IT & consulting firms</li>
       <li style={{marginLeft:"20px"}}>Companies looking for CRM + project management</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Unique Design Consultant customizes Bitrix24 based on your industry and workflow.</div>
       </>
    )
    
    
  },
  {
    query: "Is Bitrix24 cloud-based or on-premise?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Bitrix24 is available in two options:</div><br/>
       <li style={{marginLeft:"20px"}}>Cloud Version – Fast deployment with no server management</li>
       <li style={{marginLeft:"20px"}}>On-Premise Version – Installed on your own server for complete control
</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We at Unique Design Consultant help you choose the right model.</div>
       </>
    )
      
    
  },

  {
    query: "Who should use Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>What key features does Bitrix24 CRM offer?</div><br/>
       <li style={{marginLeft:"20px"}}>Lead & deal management</li>
       <li style={{marginLeft:"20px"}}>Sales pipeline automation</li>
       <li style={{marginLeft:"20px"}}>Task & project management</li>
       <li style={{marginLeft:"20px"}}>Email, WhatsApp & call tracking</li>
       <li style={{marginLeft:"20px"}}>Calendar & appointment booking</li>
       <li style={{marginLeft:"20px"}}>Reports & analytics</li>

       <div style={{fontWeight:"bold",marginTop:"10px"}}>All features are configured by Unique Design Consultant as per your business needs.</div>
       </>
    )     
  },

  {
    query: "Can Bitrix24 be customized for my business?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 is highly customizable.
Unique Design Consultant customizes:</div><br/>
       <li style={{marginLeft:"20px"}}>CRM pipelines & stages</li>
       <li style={{marginLeft:"20px"}}>Custom fields & forms</li>
       <li style={{marginLeft:"20px"}}>Automation rules</li>
       <li style={{marginLeft:"20px"}}>User roles & permissions</li>
       <li style={{marginLeft:"20px"}}>Dashboards & workflows</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Your CRM will follow your exact process.</div>
       </>
    )     
  },

  {
    query: "Does Bitrix24 support automation?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 supports powerful automation such as:</div><br/>
       <li style={{marginLeft:"20px"}}>Auto lead assignment</li>
       <li style={{marginLeft:"20px"}}>Follow-up reminders</li>
       <li style={{marginLeft:"20px"}}>Deal stage actions</li>
       <li style={{marginLeft:"20px"}}>Task auto-creation</li>
       <li style={{marginLeft:"20px"}}>Approval workflows</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We design smart automation to reduce manual work.</div>
       </>
    )     
  },

  {
    query: "Can Bitrix24 integrate with other software?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Email & WhatsApp</div><br/>
       <li style={{marginLeft:"20px"}}>Telephony systems</li>
       <li style={{marginLeft:"20px"}}>Payment gateways</li>
       <li style={{marginLeft:"20px"}}>Accounting software</li>
       <li style={{marginLeft:"20px"}}>Third-party tools via API</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>
Unique Design Consultant also develops custom integrations when required.</div>
       </>
    )     
  },

  {
    query: "Is Bitrix24 mobile-friendly?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Yes. Bitrix24 offers Android & iOS mobile apps allowing users to:</div><br/>
       <li style={{marginLeft:"20px"}}>Manage leads & deals</li>
       <li style={{marginLeft:"20px"}}>Update tasks</li>
       <li style={{marginLeft:"20px"}}>Log calls & activities</li>
       <li style={{marginLeft:"20px"}}>Collaborate with teams</li>
      
       <div style={{fontWeight:"bold",marginTop:"10px"}}>Ideal for field sales and remote teams.</div>
       </>
    )     
  },


  {
    query: "Is data secure in Bitrix24 CRM?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Data encryption</div><br/>
       <li style={{marginLeft:"20px"}}>Role-based access</li>
       <li style={{marginLeft:"20px"}}>Secure cloud infrastructure</li>
       <li style={{marginLeft:"20px"}}>GDPR compliance (cloud version)</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We further configure security as per your organization’s policies.</div>
       </>
    )     
  },


  {
    query: "Does Unique Design Consultant provide Bitrix24 implementation?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>
Yes. Unique Design Consultant provides complete Bitrix24 services including:</div><br/>
       <li style={{marginLeft:"20px"}}>Requirement analysis</li>
       <li style={{marginLeft:"20px"}}>CRM setup & customization</li>
       <li style={{marginLeft:"20px"}}>Automation & integrations</li>
       <li style={{marginLeft:"20px"}}>User training</li>
       <li style={{marginLeft:"20px"}}>Go-live & post-implementation support</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We ensure smooth adoption across your team.</div>
       </>
    )     
  },


  {
    query: "How long does Bitrix24 implementation take?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Implementation timelines vary:</div><br/>
       <li style={{marginLeft:"20px"}}>Basic CRM setup: 3–5 days</li>
       <li style={{marginLeft:"20px"}}>Customized workflows: 1–3 weeks</li>
       <li style={{marginLeft:"20px"}}>Advanced automation & integrations: 3–4 weeks</li>
       
       <div style={{fontWeight:"bold",marginTop:"10px"}}>A clear project plan is shared before execution.</div>
       </>
    )     
  },

  {
    query: "Why choose Unique Design Consultant for Bitrix24?",
    answer:(
    <> <div style={{fontWeight:"bold"}}>Clients choose Unique Design Consultant because we offer:</div><br/>
       <li style={{marginLeft:"20px"}}>Business-focused CRM design</li>
       <li style={{marginLeft:"20px"}}>Industry-specific customization</li>
       <li style={{marginLeft:"20px"}}>Clean & scalable setup</li>
       <li style={{marginLeft:"20px"}}>Reliable ongoing support</li>
       <div style={{fontWeight:"bold",marginTop:"10px"}}>We don’t just implement CRM — we design solutions that work.</div>
       </>
    )     
  },
];
const taskFaq=[
  {
query:"What is task management in Bitrix24?",
answer:"Bitrix24 task management helps you create, assign, track, and complete tasks with deadlines, priorities, and statuses."

},
{
query:"Can I assign tasks to multiple users?",
answer:"Yes, tasks can be assigned to one or multiple users with clear roles and responsibilities."
},
{
query:"Does Bitrix24 support project deadlines and milestones?",
answer:"Yes, you can set project deadlines, milestones, and dependencies to manage work efficiently."
},
{
query:"Can I track tasks using Kanban and Gantt charts?",
answer:"Yes, Bitrix24 offers Kanban boards and Gantt charts for visual task and project tracking."
},
{
query:"Are task reminders and notifications available?",
answer:"Yes, users receive automatic reminders and notifications for task updates and deadlines."
},
{
query:"Can recurring tasks be created in Bitrix24?",
answer:"Yes, recurring tasks can be scheduled daily, weekly, monthly, or as per your requirement."
},
{query:". Is time tracking available for tasks and projects?",
  answer:"Yes, Bitrix24 allows time tracking to monitor how much time is spent on each task."
},
{query:"Can task reports be generated for managers?",
  answer:"Yes, managers can generate task and productivity reports to track team performance."
}
]

const collabFaq=[
 {query:" How does Bitrix24 help teams collaborate?",
answer:"Bitrix24 provides chat, video calls, file sharing, and activity feeds in one platform."},

{query: "Does Bitrix24 offer internal chat and messaging?",
answer:"Yes, teams can communicate instantly using one-to-one and group chats."},

{query:"Can teams make video and voice calls in Bitrix24?",
answer:"Yes, Bitrix24 supports HD video conferencing and voice calls."},

{query: "Is file sharing available within teams and projects?",
answer:"Yes, users can securely share files and documents inside chats and tasks."},

{ answer:"Can employees collaborate remotely using Bitrix24?",
query:"Yes, Bitrix24 is cloud-based and accessible from anywhere."},

{answer:" Are chats and discussions stored securely?",
query:"Yes, all chats and discussions are stored securely and can be accessed later."},

 {query:"Can comments be added to tasks and files?",
answer:"Yes, users can add comments, mentions, and updates to tasks and files."},

 {query:"Does Bitrix24 support mobile collaboration?",
answer:"Yes, Bitrix24 has mobile apps for Android and iOS devices."}
]

const siteFaq=[
{query:" What is Bitrix24 Sites?",
answer:"Bitrix24 Sites allows you to build websites and landing pages without coding."
},
 {query:"Can I create a website without technical knowledge?",
answer:"Yes, you can use ready-made templates and a drag-and-drop editor."},

 {query:"Does Bitrix24 provide website templates?",
answer:"Yes, Bitrix24 offers multiple professional and responsive templates."
},

 {query:"Can I create an online store using Bitrix24?",
answer:"Yes, Bitrix24 Store lets you sell products and services online."},

{query:"Is website hosting included?",
answer:"Yes, Bitrix24 provides cloud hosting for websites and stores."
},
 {query:"Can website forms connect to CRM automatically?",
answer:"Yes, all forms and orders are automatically added to Bitrix24 CRM."},

 {query:"Does Bitrix24 support online payments?",
answer:"Yes, it supports multiple online payment gateways."},

 {query:"Can I manage products and orders in Bitrix24 Store?",
answer:"Yes, you can manage products, inventory, orders, and customers easily."}
]

const hrFaq=[
   {query:"How does Bitrix24 help manage employees?",
answer:"Bitrix24 manages employee profiles, tasks, attendance, and communication."},

 {query:"Can Bitrix24 track employee attendance?",
answer:"Yes, it supports clock-in/clock-out and work time tracking."},

 {query:"Is remote work tracking available?",
answer:"Yes, Bitrix24 tracks work time for remote and office employees."},

 {query:"Can HR manage leave requests?",
answer:"Yes, leave requests and approvals can be automated."},

 {query:"Does Bitrix24 support employee performance tracking?",
answer:"Yes, it provides reports on tasks, activity, and productivity."},

 {query:"Can onboarding tasks be automated?",
answer:"Yes, HR can automate onboarding processes using workflows."},

 {query:"Can company announcements be shared internally?",
answer:"Yes, announcements can be shared via the activity feed."},

 {query:"Are employee documents stored securely?",
answer:"Yes, Bitrix24 stores employee documents securely with access control."}
]

const copilotFaq=[
  {query:" What is Bitrix24 Copilot?",
answer:"Bitrix24 Copilot is an AI assistant that helps users work faster and smarter."},

{query: "How does Copilot improve productivity?",
answer:"It helps write content, summarize information, and reduce manual effort."},

 {query:"Can Copilot help write emails and messages?",
answer:"Yes, Copilot can draft emails, chat replies, and task descriptions."},

 {query:"Is Copilot integrated with CRM and tasks?",
answer:"Yes, Copilot works directly inside CRM, tasks, and chats."},

{query: "Can Copilot summarize chats and tasks?",
answer:"Yes, it can summarize long chats, notes, and task updates."},

{query: "Does Copilot help with content creation?",
answer:"Yes, it helps create posts, descriptions, and responses quickly."},

{query: "Is Copilot easy for non-technical users?",
answer:"Yes, Copilot is simple and user-friendly."},

{query: "Is data secure when using Copilot?",
answer:"Yes, Bitrix24 follows strong security and data protection standards."}
]

console.log(homeFAQ)

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
            navigateTo:"online-workspace",
            des: "Use chat, activity feed, comments, reactions, company-wide video announcements",
          },
          {
            contentHeading: "Online documents & file storage",
            navigateTo:"online-docs-file-storage",
            des: "Store, share and edit documents online easily with co-workers using company drive",
          },
          {
            contentHeading: "Workgroups",
            navigateTo:"workgroups",
            des: "Create workgroups, invite external users, set access permissions and work on tasks and projects",
          },
          {
            contentHeading: "Online meetings",
            navigateTo:"online-meetings",
            des: "Do more with video calls, video conferencing, screen sharing, call recording and custom backgrounds",
          },
          {
            contentHeading: "Shared Calenders",
            navigateTo:"shared-calenders",
            des: "Plan with company & personal calendar, open time slots, meeting room booking, calendar sync",
          },
          {
            contentHeading: "Mobile communications",
            navigateTo:"mobile-communications",
            des: "Team messenger, video calls, comments, calendar, notifications anywhere",
          },
          {
            contentHeading: "CoPilot in Chat",
            navigateTo:"copilot-chat",
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
            navigateTo:"task-management",
            des: "Choose between Kanban board, Gantt chart, Scrum, task list",
          },
          {
            contentHeading: "Task tracking",
            navigateTo:"task-tracking",
            des: "Take advantage of checklists & sub-tasks, task summary, time tracking, focus & supervisor mode",
          },
          {
            contentHeading: "API & integrations",
            navigateTo:"api-integrations",
            des: "Connect your tasks to other services via API integration for advanced task automation",
          },
          {
            contentHeading: "Project management",
            navigateTo:"projects-management",
            des: "Use projects, workgroups, project planning, roles, access permissions",
          },
          {
            contentHeading: "Employee performance",
            navigateTo:"employee-performance",
            des: "Get productive with task reports, workload management, task efficiency & KPI",
          },
          {
            contentHeading: "Mobile tasks",
            navigateTo:"mobile-tasks",
            des: "Task creation, task tracking, notifications, comments, chat on the go",
          },
          {
            contentHeading: "Project collaboration",
            navigateTo:"project-collaboration",
            des: "Work faster with chat, video calls, comments, file storage, documents, external users, task templates",
          },
          {
            contentHeading: "Automation",
            navigateTo:"automation",
            des: "Save time with automatic task creation and workflow automation",
          },
          {
            contentHeading: "CoPilot in Tasks",
            navigateTo:"copilot-tasks",
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
            navigateTo:"website-builder",
            des: "Use our free CMS, templates, hosting, AI-generated images and texts to create awesome sites",
          },
          {
            contentHeading: "Social selling",
            navigateTo:"social-selling",
            des: "Sell your products directly via Facebook, Instagram, WhatsApp or Telegram",
          },
          {
            contentHeading: "Website forms",
            navigateTo:"website-forms",
            des: "Capture leads with custom order forms, registration & feedback forms, and forms with conditional fields",
          },
          {
            contentHeading: "Landing pages",
            navigateTo:"landing-pages",
            des: "Generate leads with capture forms, automated funnels and Google Analytics integration",
          },
          {
            contentHeading: "Online store",
            navigateTo:"online-store",
            des: "Maximize ecommerce with inventory management, order processing, delivery and online payments",
          },
          {
            contentHeading: "Mobile sites & online stores",
            navigateTo:"mobile sites-online stores",
            des: "Responsive design, online orders, client management in your pocket",
          },
          {
            contentHeading: "Website widget",
            navigateTo:"website-widget",
            des: "Enable widget to chat with site visitors, use popular messengers and accept callback requests",
          },
          {
            contentHeading: "Online marketing tools",
            navigateTo:"online-marketing-tools",
            des: "Increase sales with email marketing, Facebook or Google Ads, marketing automation, CRM integration",
          },
          {
            contentHeading: "CoPilot in Sites & Stores",
            navigateTo:"copilot-sites-stores",
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
            navigateTo:"employee-management",
            des: "Use employee profiles, company structure, access permissions, Active Directory",
          },
          {
            contentHeading: "Cultural & engagement",
            navigateTo:"cultural-engagement",
            des: "Get company news, polls, appreciation badges, tags, personal notifications",
          },
          {
            contentHeading: "Mobile HR",
            navigateTo:"mobile-hr",
            des: "Chat, video calls, employee profiles, approvals, notifications on the go",
          },
          {
            contentHeading: "Work management",
            navigateTo:"work-management",
            des: "Track employee performance with KPI, work reports, supervisor view",
          },
          {
            contentHeading: "Internal communications",
            navigateTo:"internal-communications",
            des: "Communicate via video announcements, memos, public and private chats",
          },
          {
            contentHeading: "CoPilot in Feed",
            navigateTo:"copilot-feed",
            des: "Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
          },
          {
            contentHeading: "Information management",
            navigateTo:"info-management",
            des: "Work with knowledge bases, online documents, file storage, access permissions",
          },
          {
            contentHeading: "Automation",
            navigateTo:"cultural-automation",
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
            navigateTo:"copilot-in-crm",
            des: "Call audio-to-text transcription, call summary, field autocompletion in deals",
          },
          {
            contentHeading: "CoPilot in Tasks",
            navigateTo:"copilot-in-tasks",
            des: "AI-generated task descriptions, task summaries, checklists, comments",
          },
          {
            contentHeading: "CoPilot in Chat",
            navigateTo:"copilot-in-chat",
            des: "Unlimited source of ideas, AI-generated texts, brainstorming, and more",
          },
          {
            contentHeading: "CoPilot in Sites & Stores",
            navigateTo:"copilot-in-site-stores",
            des: "Compelling copy on demand, AI-generated images, detailed prompts, text translation",
          },
          {
            contentHeading: "CoPilot in Feed",
            navigateTo:"copilot-in-feed",
            des: "Thread summaries, AI-generated ideas, text editing & creation, AI-written responses, text translation",
          },
          {
            contentHeading: "CoPilot in Video Calls",
            navigateTo:"copilot-in-viedo-calls",
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
          side_1:side_1,
          side_2:side_2,
          side_3:side_3,
          side_4:side_4,
          side_5:side_5, 
          homeFaq:homeFAQ,
          taskFaq:taskFaq,
          collabFaq:collabFaq,
          siteFaq:siteFaq,
          hrFaq:hrFaq,
          copilotFaq:copilotFaq    
        }}
      >
        {children}
      </CommonDataContext.Provider>
    </>
  );
};

export default DataContextProvider;
