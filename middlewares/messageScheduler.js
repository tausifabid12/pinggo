"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAndSendMessages = void 0;
const moment_1 = __importDefault(require("moment"));
const campaign_model_1 = __importDefault(require("../modules/campaign/campaign.model"));
const sendMessage = (message, phone) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`📩 Sending message: "${message}" to ${phone}`);
    let data = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phone,
        "type": "interactive",
        "interactive": {
            "type": "cta_url",
            /* Header optional */
            "header": {
                "type": "text",
                "text": "Welcome to XYZ Store 🛍️"
            },
            /* Body optional */
            "body": {
                "text": `${message}`
            },
            "action": {
                "name": "cta_url",
                "parameters": {
                    "display_text": "View Products",
                    "url": 'http://viral247.digital/'
                }
            }
        }
    };
    const res = yield fetch('https://graph.facebook.com/v21.0/587413964445127/messages', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer EAAOpPoBIEyoBOzOKdOtJ16JKtpSDUzo058PweeydvMcIQDX2p3HpN7DsIfp5sZCx6ff8oW4kmQofu1VoL1w5W1114AMz9h9CjymtPEUpo4l6UQxsLXeAfGWZBwlk6LuwJTr5IxcfLEX3J8NfRJFzUlZA3J7MGqthNBL8kIsqjoh5NNUDLqcwstCm0kkKzKIKQZDZD`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
});
const checkAndSendMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const today = (0, moment_1.default)().format("M/D/YYYY"); // Match the flow.date format
        console.log('hjeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        let campaigns = yield campaign_model_1.default.find();
        campaigns.forEach((campaign) => {
            campaign.messageFlow.forEach((flow) => {
                if ((0, moment_1.default)(flow.date, "M/D/YYYY").format("M/D/YYYY") === today) {
                    campaign.contacts.forEach((contact) => {
                        if (contact.status === "pending") {
                            sendMessage(flow.message, contact.phone);
                        }
                    });
                }
            });
        });
        next(); // Subscription is valid, proceed
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while checking campaigns.",
            error: error.message
        });
    }
});
exports.checkAndSendMessages = checkAndSendMessages;
