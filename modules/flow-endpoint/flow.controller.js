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
exports.handleCreateCustomFlow = exports.handleCreateFlow = exports.handleEndPointData = exports.generateFlow = void 0;
const encrypt_and_decrypt_1 = require("../../utils/encrypt.and.decrypt");
const user_flow_model_1 = __importDefault(require("../user-flow/user-flow.model"));
const appointments_model_1 = __importDefault(require("../appointments/appointments.model"));
const messages_model_1 = __importDefault(require("../messages/messages.model"));
const VERIFY_TOKEN = "my-secret-token";
const PRIVATE_KEY = `-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFJDBWBgkqhkiG9w0BBQ0wSTAxBgkqhkiG9w0BBQwwJAQQmrwByERyo87P639V
YSRC+wICCAAwDAYIKoZIhvcNAgkFADAUBggqhkiG9w0DBwQIu0qdlOt4SRMEggTI
xgxg5zeGShzA+l+aVFycZPQ1C1uHfAd2YG6JA2HrJbVl3MkG9BKRo3dNQr8Qlsi0
ken31SdEaEegDupiypxGBkJ6HOp18rqlH9Yc2caEjvZkn00foTO63L8PjQFBH86x
/byfGIjMgxyqwtvGDDXPSRdhicMc2dGZ1NqoI0Yhlt6yw1WHZstrKqqmtamTHCbS
JkhH5uJP2l7uM/6E9ABLtgfOLZcaZgcB1Du8iXdLTwun+l7Wut+VGKuCYmoig8rh
6v1kPj+FerKSnfEdZEnWQlnNs8Xz/gbAqzBb5ouZnLJVSjoeUY1l5gaCK/ZkHjt3
x+laNCJcCwMY1ESN/vrY1R0Xx3lPddQfW/e2P0LLV694oBUsk+LCAvpdKAqkpB5K
7Qvmc0F4pJiUdwuANDiOgCDYimBK3qmt6tX2u7GFNBFiP+9Z1q6LMGr8tuwy7Rc3
SOdbi9yO2QY6n8dTzR73R57Rh85Vkn6SQr2CQR9wMxZ1Y+i6zeXtKJqPfKYs4v/p
VB7Wi0QDgP9wzTYHHmbWM7EPLJ2yi/Oy3im0Xz35orcB70DePLDR52zYYwwyxkii
aP8YBbsAdLN2XGQZ5NSWdM6aE/W0UfDYtb/PUUfoDvFR0UV0x8ltz3Xne7PpG5bS
UNeACDA4ZKzBYEyDPXgXnsbU0RHWefHeg3Ebs66sdjB41/e3Q2/9Ht74A7G7n6l8
KAgWhmPBk2ZzWMTtSfflaHgRERsET621xmVQGOOaz5OBKKhgc1YO9bq2iKD/LqdU
FRA5n205N1cYElL4ZR+tNML7JV+y/LCt70y/6omo04qsZv7TM1v2dq66B8rz9JmN
pbVqKMxzg7VN0Rjct59DXRJOEltEVCqdwcOBz2x1QCpyohgmkU/sCeIKOySceuDE
IMlrIKCLya6VW+JVZ0O1wYnAIYNqqH4qgTur0LtJRz4/u1Aqs44K8A4IoKsltHyZ
qxzu3xCdJTL2HNwvBDJ/yIOdveD3InbgxKQ2997ad50usgRCIPUyfz40RX+U7Irh
URbBcUGIisgwxmmBLPsNBB9LChca8o6vLegYWGMqcqRSSxqYxdAmGdBzqQ5r/cmz
c+V5ey+uoseMwicl0nkqsYpBF/U5g4jl1iwcE2aRnL0oZ9j4XEnLCiixm5bkvDNm
vXbDHpkkAx4vd+Tq6ZeyW4/B9gdi6dWYphjrOA9rsJ6gVug7d1ZjvelqT/wnfmI7
V0JJb+k+1ISx30AmnTSAbWUblOLoYaxUVff2VNFsAvKIunYGygzVz/E+YE3dxsLu
r+3HX1m3Q8+SV5C75dwwmOMGgp741VYTK7YbXBR0mviMif+7sHrWuwCcqgpeWMV6
B0Wx14FASAuP97EN4mL55cH6Ay4m/5eesP9D7fjIJasJgAkD/7ah1U3B7Wg/2qga
2qRGqBCItWkiFcMaOOpizlXffS2jj8ORgwxN/0QvSje1lrQQXDgtjKz+kQJLlBnb
NJWbtCdUhOHKIxZM19lK1HTGcz0T8065WvvIXMQMo8uLawq+f3OY1bvkUPm2scTm
3/Hqe08as8XN9CtJYcLqHEN0Tal+4+EG8s9st8QXpKijTV4qLm/VeiAUpvOkse+r
OT/lfLueJPaBM5+2sr/Huqr7SZ2W+QnZ
-----END ENCRYPTED PRIVATE KEY-----`;
let users = [
    {
        isBusinessSetupComplete: false,
        isBusinessDataAdded: false,
        id: 'demoOne',
        name: 'Demo User One',
        email: 'demo@one.com',
        password: 'password123',
    },
    {
        isBusinessSetupComplete: false,
        isBusinessDataAdded: false,
        id: 'demoTwo',
        name: 'Demo User Two',
        email: 'demo@two.com',
        password: 'password456'
    },
];
const generateFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.query;
        console.log("Route Parameter:", params);
        const { body } = req;
        const { decryptedBody, aesKeyBuffer, initialVectorBuffer } = (0, encrypt_and_decrypt_1.decryptRequest)(body, PRIVATE_KEY);
        const responseData = yield getNextScreen(decryptedBody);
        const encryptedResponse = (0, encrypt_and_decrypt_1.encryptResponse)(responseData, aesKeyBuffer, initialVectorBuffer);
        res.send(encryptedResponse);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.generateFlow = generateFlow;
const handleEndPointData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
    try {
        const userdata = yield user_flow_model_1.default.find();
        const body = req.body;
        console.log(body, '||||||||||||||||||||||||');
        const senderNumber = body === null || body === void 0 ? void 0 : body.phone_number;
        const message_body = body === null || body === void 0 ? void 0 : body.message_body;
        const message_type = body === null || body === void 0 ? void 0 : body.message_type;
        const timestamp = body === null || body === void 0 ? void 0 : body.timestamp;
        const message_id = body === null || body === void 0 ? void 0 : body.message_id;
        const message_entryArray = body === null || body === void 0 ? void 0 : body.message_entry;
        let isExists = userdata.find(item => { var _a; return (_a = item.keywords) === null || _a === void 0 ? void 0 : _a.some(keyword => keyword.toLowerCase() === message_body.toLowerCase()); });
        if (isExists) { // No need to check message_id since it's missing in your data
            let templateName = isExists.flowName;
            let type = isExists.flowType;
            if (type === "dynamic") {
                sendMessage(senderNumber, "doctor_demo_two");
            }
            else {
                sendMessage(senderNumber, "test_new_lead", 'flow');
            }
            console.log(templateName);
        }
        // ========================================= type text =================================
        if (message_type == "text") {
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('demo_shop_start'))) {
                yield sendMessage(senderNumber, 'shop_opeingin', 'text');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('school_student_start'))) {
                yield sendMessage(senderNumber, 'school_student_start', 'text');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('webinar_start'))) {
                yield sendMessage(senderNumber, 'webinar_start', 'flow', 'en');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('doctor_demo_one'))) {
                yield sendMessage(senderNumber, 'doctor_demo_one', 'flow');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('doctor_demo_two'))) {
                yield sendMessage(senderNumber, 'doctor_demo_two', 'flow');
            }
            console.log((_a = message_entryArray[0]) === null || _a === void 0 ? void 0 : _a.changes[0], 'display number changes');
            console.log((_e = (_d = (_c = (_b = message_entryArray[0]) === null || _b === void 0 ? void 0 : _b.changes[0]) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.display_phone_number, 'display number');
            console.log((_j = (_h = (_g = (_f = message_entryArray[0]) === null || _f === void 0 ? void 0 : _f.changes[0]) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.metadata) === null || _j === void 0 ? void 0 : _j.phone_number_id, 'phone number id');
            console.log((_m = (_l = (_k = message_entryArray[0]) === null || _k === void 0 ? void 0 : _k.changes[0]) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.contacts[0], 'contact');
            console.log((_s = (_r = (_q = (_p = (_o = message_entryArray[0]) === null || _o === void 0 ? void 0 : _o.changes[0]) === null || _p === void 0 ? void 0 : _p.value) === null || _q === void 0 ? void 0 : _q.contacts[0]) === null || _r === void 0 ? void 0 : _r.profile) === null || _s === void 0 ? void 0 : _s.name, 'profile');
            const messageData = {
                senderNumber: senderNumber,
                senderName: (_x = (_w = (_v = (_u = (_t = message_entryArray[0]) === null || _t === void 0 ? void 0 : _t.changes[0]) === null || _u === void 0 ? void 0 : _u.value) === null || _v === void 0 ? void 0 : _v.contacts[0]) === null || _w === void 0 ? void 0 : _w.profile) === null || _x === void 0 ? void 0 : _x.name,
                receiverNumber: (_1 = (_0 = (_z = (_y = message_entryArray[0]) === null || _y === void 0 ? void 0 : _y.changes[0]) === null || _z === void 0 ? void 0 : _z.value) === null || _0 === void 0 ? void 0 : _0.metadata) === null || _1 === void 0 ? void 0 : _1.display_phone_number,
                userPhoneNumberId: (_5 = (_4 = (_3 = (_2 = message_entryArray[0]) === null || _2 === void 0 ? void 0 : _2.changes[0]) === null || _3 === void 0 ? void 0 : _3.value) === null || _4 === void 0 ? void 0 : _4.metadata) === null || _5 === void 0 ? void 0 : _5.phone_number_id,
                messages: [
                    {
                        messageId: message_id,
                        messageText: message_body,
                        audioUrl: "",
                        videoUrl: "",
                        imageUrl: "",
                        isEcho: false,
                        isTemplate: false
                    }
                ]
            };
            yield addOrCreateMessage(messageData);
        }
        if (message_type == "button") {
            console.log('here -------------- button ');
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('View Products'))) {
                yield sendMessage(senderNumber, 'view_products');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Add Address'))) {
                yield sendMessage(senderNumber, 'add_address', 'flow');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Student'))) {
                yield sendMessage(senderNumber, 'add_address', 'flow');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Applicant'))) {
                yield sendMessage(senderNumber, 'education_opeingin', 'text');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Payments'))) {
                yield sendMessage(senderNumber, 'payment_history', 'text');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Check Result'))) {
                yield sendMessage(senderNumber, 'check_result', 'flow');
            }
            if (message_body && (message_body === null || message_body === void 0 ? void 0 : message_body.includes('Support'))) {
                yield sendMessage(senderNumber, 'school_support', 'flow');
            }
        }
        if (message_type === 'interactive') {
            console.log('interactive');
            if (Array.isArray(message_entryArray)) {
                for (let i = 0; i < message_entryArray.length; i++) {
                    const element = message_entryArray[i];
                    const dataArray = element === null || element === void 0 ? void 0 : element.changes;
                    if (Array.isArray(dataArray)) {
                        for (let j = 0; j < dataArray.length; j++) {
                            const messages = dataArray[j];
                            const data = (_6 = messages === null || messages === void 0 ? void 0 : messages.value) === null || _6 === void 0 ? void 0 : _6.messages[0];
                            let from = data === null || data === void 0 ? void 0 : data.from;
                            let interactive = (_7 = data === null || data === void 0 ? void 0 : data.interactive) === null || _7 === void 0 ? void 0 : _7.nfm_reply;
                            let interactive_response_json = (_9 = (_8 = data === null || data === void 0 ? void 0 : data.interactive) === null || _8 === void 0 ? void 0 : _8.nfm_reply) === null || _9 === void 0 ? void 0 : _9.response_json;
                            const parsed = JSON.parse(interactive_response_json);
                            console.log(parsed);
                            const flowName = parsed === null || parsed === void 0 ? void 0 : parsed.flow_token;
                            if (flowName == 'check_result') {
                                yield sendMessage(senderNumber, 'student_result', 'text');
                            }
                            let leadsData = {
                                data: interactive_response_json,
                                userId: '9',
                                flowName: flowName,
                            };
                            const result = yield appointments_model_1.default.create(leadsData);
                        }
                    }
                }
            }
        }
        res.sendStatus(200);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.handleEndPointData = handleEndPointData;
function generateSimpleData(data) {
    let result = {}; // Initialize an empty object
    data.forEach(item => {
        Object.keys(item).forEach(key => {
            // Extract the actual key name (remove "screen_0_" and "_0, _1, etc.")
            let cleanKey = key.replace(/^screen_0_/, "").replace(/_\d+$/, "");
            // Store only the cleaned-up keys
            result[cleanKey] = item[key];
        });
    });
    // Adding a fixed key
    result["flow_token"] = "unused";
    console.log(result);
    return result;
}
// export const handleCreateTemplate = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { button, bodyText, flowName } = req.body
//         let body = {
//             "name": flowName.replace(/[^a-zA-Z0-9]/g, ''),
//             "language": "en_US",
//             "category": "MARKETING",
//             "components": [
//                 {
//                     "type": "body",
//                     "text": `${bodyText}`
//                 },
//                 {
//                     "type": "BUTTONS",
//                     "buttons": [
//                         {
//                             "type": "FLOW",
//                             "text": button,
//                             "flow_id": "2345729795795066"
//                         }
//                     ]
//                 }
//             ]
//         }
//         console.log(body)
//         const response = await axios.post(
//             `https://graph.facebook.com/v21.0/601959412989825/message_templates`,
//             body,
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );
//         console.log(response, "|||||||||||||||||||| +++++++++++++++++++++++")
//         res.send(JSON.stringify({
//             data: response
//         }));
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };
const handleCreateFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { bodyText, button, flowName, keywords, type, userId, userName } = req.body;
        let body = {
            "name": flowName === null || flowName === void 0 ? void 0 : flowName.replace(/[^a-zA-Z0-9]/g, "_"),
            "language": "en_US",
            "category": "MARKETING",
            "components": [
                {
                    "type": "body",
                    "text": bodyText
                },
                {
                    "type": "BUTTONS",
                    "buttons": [
                        {
                            "type": "FLOW",
                            "text": button,
                            "flow_id": "621301597504534"
                        }
                    ]
                }
            ]
        };
        // const response = await fetch(`https://graph.facebook.com/v21.0/601959412989825/message_templates`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        //     },
        //     body: JSON.stringify(body),
        // });
        // const data = await response.json()
        // console.log(data)
        // if (!response.ok) {
        //     throw new Error(`Error: ${response.status} - ${response.statusText}`);
        // }
        yield user_flow_model_1.default.create({
            keywords: keywords === null || keywords === void 0 ? void 0 : keywords.split(","),
            flowJson: JSON.stringify(body),
            flowType: type,
            flowName: (_a = flowName === null || flowName === void 0 ? void 0 : flowName.toLowerCase()) === null || _a === void 0 ? void 0 : _a.replace(/[^a-zA-Z0-9]/g, "_"),
            userName: userName,
            userId: userId
        });
        res.status(200).json({
            success: true,
            data: {}
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.handleCreateFlow = handleCreateFlow;
const handleCreateCustomFlow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, jsonFile } = req.body;
        // ============== create flow
        const createFlowRes = yield fetch(`https://graph.facebook.com/v21.0/601959412989825/flows`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
            body: JSON.stringify({
                "name": name === null || name === void 0 ? void 0 : name.replace(/[^a-zA-Z0-9]/g, "_"),
                "categories": ["OTHER"]
            }),
        });
        const createFlowData = yield createFlowRes.json();
        console.log(createFlowData);
        if (createFlowData) {
            // ============== update flow
            const updateFlowRes = yield fetch(`https://graph.facebook.com/v21.0/601959412989825/flows`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                },
                body: JSON.stringify({
                    "name": name === null || name === void 0 ? void 0 : name.replace(/[^a-zA-Z0-9]/g, "_"),
                    "categories": ["OTHER"]
                }),
            });
            const updateFlowData = yield updateFlowRes.json();
            console.log(updateFlowData);
            if (updateFlowData) {
                // ============== publish flow
                const publishFlowRes = yield fetch(`https://graph.facebook.com/v21.0/601959412989825/flows`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    },
                    body: JSON.stringify({
                        "name": name === null || name === void 0 ? void 0 : name.replace(/[^a-zA-Z0-9]/g, "_"),
                        "categories": ["OTHER"]
                    }),
                });
                const publishFlowData = yield publishFlowRes.json();
                console.log(publishFlowData);
            }
        }
        // if (!response.ok) {
        //     throw new Error(`Error: ${response.status} - ${response.statusText}`);
        // }
        res.status(200).json({
            success: true,
            data: {}
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
exports.handleCreateCustomFlow = handleCreateCustomFlow;
// utls ==========================================================
function handleScreenFlowJson() {
    return __awaiter(this, void 0, void 0, function* () {
        const booked = [];
        let schedules = [
            {
                "id": "10:30",
                "title": "10:30"
            },
            {
                "id": "11:30",
                "title": "11:30"
            },
            {
                "id": "12:30",
                "title": "12:30"
            },
            {
                "id": "01:30",
                "title": "01:30"
            },
            {
                "id": "02:30",
                "title": "02:30"
            },
        ];
        let bookedTimes = new Set(booked.map((b) => b.time.replace('.', ':')));
        let availableSchedules = [];
        if (bookedTimes) {
            availableSchedules = schedules.filter(schedule => !bookedTimes.has(schedule.id));
        }
        else {
            availableSchedules = schedules;
        }
        const SCREEN_RESPONSES = {
            APPOINTMENT: {
                screen: "APPOINTMENT",
                data: {
                    department: [
                        {
                            "id": "Cardiology",
                            "title": "Cardiology"
                        },
                        {
                            "id": "Neurology",
                            "title": "Neurology"
                        }
                    ],
                    location: [
                        {
                            "id": "1",
                            "title": "King’s Cross, London"
                        },
                        {
                            "id": "2",
                            "title": "Oxford Street, London"
                        }
                    ],
                    is_location_enabled: true,
                    date: [
                        {
                            "id": "2022-02-28",
                            "title": "Mon Feb 28 2025"
                        }
                    ],
                    is_date_enabled: true,
                    time: availableSchedules,
                    is_time_enabled: true,
                }
            },
            DETAILS: {
                screen: "DETAILS",
                data: {
                    department: "beauty",
                    location: "1",
                    date: "2024-01-01",
                    time: "11:30",
                },
            },
            SUMMARY: {
                screen: "SUMMARY",
                data: {
                    appointment: "Beauty & Personal Care Department at Kings Cross, London\nMon Jan 01 2024 at 11:30.",
                    details: "Name: John Doe\nEmail: john@example.com\nPhone: 123456789\n\nA free skin care consultation, please",
                    department: "beauty",
                    location: "1",
                    date: "2024-01-01",
                    time: "11:30",
                    name: "John Doe",
                    email: "john@example.com",
                    phone: "123456789",
                    more_details: "A free skin care consultation, please",
                },
            },
            TERMS: {
                screen: "TERMS",
                data: {},
            },
            SUCCESS: {
                screen: "SUCCESS",
                data: {
                    extension_message_response: {
                        params: {
                            flow_token: "REPLACE_FLOW_TOKEN",
                            some_param_name: "PASS_CUSTOM_VALUE",
                        },
                    },
                },
            },
        };
        return SCREEN_RESPONSES;
    });
}
const getNextScreen = (decryptedBody) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { screen, data, version, action, flow_token } = decryptedBody;
    if (action === "ping") {
        return { data: { status: "active" } };
    }
    if (data === null || data === void 0 ? void 0 : data.error) {
        console.warn("Received client error:", data);
        return { data: { acknowledged: true } };
    }
    let SCREEN_RESPONSES = yield handleScreenFlowJson();
    if (action === "INIT") {
        return Object.assign(Object.assign({}, SCREEN_RESPONSES.APPOINTMENT), { data: Object.assign(Object.assign({}, SCREEN_RESPONSES.APPOINTMENT.data), { is_location_enabled: false, is_date_enabled: false, is_time_enabled: false }) });
    }
    if (action === "data_exchange") {
        switch (screen) {
            case "APPOINTMENT":
                return Object.assign(Object.assign({}, SCREEN_RESPONSES.APPOINTMENT), { data: Object.assign(Object.assign({}, SCREEN_RESPONSES.APPOINTMENT.data), { is_location_enabled: Boolean(data.department), is_date_enabled: Boolean(data.department) && Boolean(data.location), is_time_enabled: Boolean(data.department) &&
                            Boolean(data.location) &&
                            Boolean(data.date), location: SCREEN_RESPONSES.APPOINTMENT.data.location, date: SCREEN_RESPONSES.APPOINTMENT.data.date, time: SCREEN_RESPONSES.APPOINTMENT.data.time }) });
            case "DETAILS":
                const departmentName = "Beauty & Personal Care";
                const locationName = (_a = SCREEN_RESPONSES.APPOINTMENT.data.location.find((loc) => loc.id === data.location)) === null || _a === void 0 ? void 0 : _a.title;
                const dateName = (_b = SCREEN_RESPONSES.APPOINTMENT.data.date.find((date) => date.id === data.date)) === null || _b === void 0 ? void 0 : _b.title;
                const appointment = `${departmentName} at ${locationName}\n${dateName} at ${data.time}`;
                const details = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n"${data.more_details}"`;
                return Object.assign(Object.assign({}, SCREEN_RESPONSES.SUMMARY), { data: Object.assign({ appointment,
                        details }, data) });
            case "SUMMARY":
                return Object.assign(Object.assign({}, SCREEN_RESPONSES.SUCCESS), { data: {
                        extension_message_response: {
                            params: {
                                flow_token,
                                data
                            },
                        },
                    } });
            default:
                break;
        }
    }
    console.error("Unhandled request body:", decryptedBody);
    throw new Error("Unhandled endpoint request.");
});
function sendMessage(phoneNumber_1, template_Name_1) {
    return __awaiter(this, arguments, void 0, function* (phoneNumber, template_Name, type = 'text', language = "en_US") {
        try {
            if (!phoneNumber || !template_Name) {
                console.error("Error: Missing phoneNumber or template_Name");
                return;
            }
            let body = {
                "messaging_product": "whatsapp",
                "to": phoneNumber,
                "type": "template",
                "template": {
                    "name": template_Name,
                    "language": {
                        "code": language
                    }
                }
            };
            if (type === 'flow') {
                body = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": template_Name,
                        "language": {
                            "code": language
                        },
                        "components": [
                            {
                                "type": "button",
                                "sub_type": "flow",
                                "index": "0",
                                "parameters": [
                                    {
                                        "type": "action",
                                        "action": {
                                            "flow_token": template_Name
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                };
            }
            if (template_Name === 'doctor_demo_one') {
                body = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": "doctor_demo_two",
                        "language": {
                            "code": "en_US"
                        },
                        "components": [
                            {
                                "type": "button",
                                "sub_type": "flow",
                                "index": "0",
                                "parameters": [
                                    {
                                        "type": "action",
                                        "action": {
                                            "flow_token": "FLOW_TOKEN",
                                            "flow_action_data": {
                                                "department": [
                                                    { "id": "Cardiology", "title": "Cardiology" },
                                                    { "id": "Neurology", "title": "Neurology" }
                                                ],
                                                "location": [
                                                    { "id": "1", "title": "King’s Cross, London" },
                                                    { "id": "2", "title": "Oxford Street, London" }
                                                ],
                                                "date": [
                                                    { "id": "2022-02-28", "title": "Mon Feb 28 2025" }
                                                ],
                                                "time": [
                                                    { "id": "10:30", "title": "10:30" }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                };
            }
            if (template_Name === 'doctor_demo_two') {
                body = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": "doctor_demo_one",
                        "language": {
                            "code": "en_US"
                        },
                        "components": [
                            {
                                "type": "button",
                                "sub_type": "flow",
                                "index": "0",
                                "parameters": [
                                    {
                                        "type": "action",
                                        "action": {
                                            "flow_token": "FLOW_TOKEN",
                                            "flow_action_data": {
                                                "department": [
                                                    { "id": "Cardiology", "title": "Cardiology" },
                                                    { "id": "Neurology", "title": "Neurology" }
                                                ],
                                                "location": [
                                                    { "id": "1", "title": "King’s Cross, London" },
                                                    { "id": "2", "title": "Oxford Street, London" }
                                                ],
                                                "date": [
                                                    { "id": "2022-02-28", "title": "Mon Feb 28 2025" }
                                                ],
                                                "time": [
                                                    { "id": "10:30", "title": "10:30" }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                };
            }
            if (template_Name === 'view_products') {
                body = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": "view_products",
                        "language": {
                            "code": "en_US"
                        },
                        "components": [
                            {
                                "type": "button",
                                "sub_type": "CATALOG",
                                "index": 0,
                                "parameters": [
                                    {
                                        "type": "action",
                                        "action": {
                                            "thumbnail_product_retailer_id": "nwd4560y2p"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                };
            }
            if (template_Name === 'school_student_start') {
                body = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": "school_student_start",
                        "language": {
                            "code": "en_US"
                        },
                        "components": [
                            {
                                "type": "button",
                                "sub_type": "quick_reply",
                                "index": "0",
                                "parameters": [
                                    {
                                        "type": "payload",
                                        "payload": "PAYLOAD"
                                    }
                                ]
                            },
                            {
                                "type": "button",
                                "sub_type": "quick_reply",
                                "index": "1",
                                "parameters": [
                                    {
                                        "type": "payload",
                                        "payload": "PAYLOAD"
                                    }
                                ]
                            },
                            {
                                "type": "button",
                                "sub_type": "quick_reply",
                                "index": "2",
                                "parameters": [
                                    {
                                        "type": "payload",
                                        "payload": "PAYLOAD"
                                    }
                                ]
                            },
                            {
                                "type": "button",
                                "sub_type": "quick_reply",
                                "index": "3",
                                "parameters": [
                                    {
                                        "type": "payload",
                                        "payload": "PAYLOAD"
                                    }
                                ]
                            },
                            {
                                "type": "button",
                                "sub_type": "url",
                                "index": "4",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "https://drive.google.com/file/d/1JWjOq4naqEls55plxpTfMUuZnh25TMUZ/view"
                                    }
                                ]
                            }
                        ]
                    }
                };
            }
            console.log(body, "=============================");
            const response = yield fetch('https://graph.facebook.com/v21.0/587413964445127/messages', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer EAAOpPoBIEyoBOzOKdOtJ16JKtpSDUzo058PweeydvMcIQDX2p3HpN7DsIfp5sZCx6ff8oW4kmQofu1VoL1w5W1114AMz9h9CjymtPEUpo4l6UQxsLXeAfGWZBwlk6LuwJTr5IxcfLEX3J8NfRJFzUlZA3J7MGqthNBL8kIsqjoh5NNUDLqcwstCm0kkKzKIKQZDZD`,
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }
            const data = yield response.json();
            console.log("API Response:", data);
            return data;
        }
        catch (error) {
            console.error("sendMessage Error:", error);
            return null;
        }
    });
}
// const addOrCreateMessage = async (messageData: any) => {
//     try {
//         // Check if a message document exists for the given userPhoneNumberId
//         const existingMessage = await Message.findOne({ userPhoneNumberId: messageData.userPhoneNumberId });
//         if (existingMessage) {
//             // If the message document exists, add the new message to the `messages` array
//             existingMessage.messages.push(messageData.messages[0]); // Push only the first message (since it's an array)
//             await existingMessage.save();
//             console.log('Message added to existing conversation');
//         } else {
//             // If no document is found, create a new one with the provided data
//             const newMessageData = new Message(messageData);
//             const result = await newMessageData.save();
//             console.log('New message document created', result);
//         }
//     } catch (error) {
//         console.error('Error adding or creating message:', error);
//     }
// };
function addOrCreateMessage(messageData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const existingMessage = yield messages_model_1.default.findOne({ senderNumber: messageData.senderNumber });
            if (existingMessage) {
                // Append new message to the existing document
                yield messages_model_1.default.updateOne({ senderNumber: messageData.senderNumber }, { $push: { messages: messageData.messages[0] } });
            }
            else {
                // Create new message document
                yield messages_model_1.default.create(messageData);
            }
            console.log("Message added/updated successfully.");
        }
        catch (error) {
            console.error("Error adding or updating message:", error);
        }
    });
}
