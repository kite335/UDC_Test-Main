// import css from './CRM.module.css'

import {useContext} from "react"
import { CommonDataContext } from "../store/CommonData";
import ProductTop from '../components/ProductTop'
import FAQ from '../components/FAQ'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'
import crmImage4 from '../assets/product/crm4.jpg'
import crmImage5 from '../assets/product/crm5.jpg'
import crmImage6 from '../assets/product/crm6.jpg'

const CRM = () => {
    const {homeFaq}=useContext(CommonDataContext)
    const crmData = {
        h: "Free CRM software for your business",
        p: "Sell more. Sell better. Sell faster with Bitrix24 a single platform to cover all your needs.",
        img: crmImage, h_2: "CRM that's packed with sales, marketing, and analytics tools",
        p_2: "Bitrix24 CRM has everything you need to acquire leads, turn them into deals, receive payments, manage inventory, e-sign documents, run marketing campaigns, increase customer engagement, grow customer retention, track sales metrics, and more.",
        img_2: crmImage2,
        h_3: "Serious automation capabilities",
        p_3: "Set up automated client notifications via SMS or email, use our customizable triggers to automatically move leads/deals down the sales pipeline, configure automated notifications to your sales reps based on the lead/deal status.",
        img_3: crmImage3,
        btn: "AUTOMATE YOUR SALES",

         h_4: "Free AI-powered sales assistant CoPilot",
        p_4: "Use our free AI-powered assistant CoPilot to create compelling marketing texts, generate new ideas, and transcribe phone calls in your CRM, autocompleting the fields in the respective lead or deal. The AI scoring tool will help you with sales forecasting.",
        img_4: crmImage4,
        btn_1:"TRY COPILOT IN BITRIX24",

         h_5: "Omnichannel communication",
        p_5: "No matter how a client contacts you (web form, email, live chat, social media, messenger, telephony), their message will be processed in the Contact Center and automatically turned into a lead in your CRM. From there, you can either continue the conversation or create a deal.",
        img_5: crmImage5,
        btn_2:"SET UP CONTACT CENTER",

        
         h_6: "More than just CRM",
        p_6: "In addition to purely sales and marketing tools, Bitrix24 features everything your team needs to collaborate and communicate efficiently: chat, video calls and conferencing, file storage, calendar, online documents, mobile sales app, tasks, work time tracking, and more.",
        img_6: crmImage6,
        
    }

    

    return (
        <>
            <ProductTop data={crmData}  />
            <FAQ faq={homeFaq}/>
        </>

    )
}

export default CRM;