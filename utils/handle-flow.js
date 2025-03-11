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
// ====================================
const FLOWS = {
    APPOINTMENT_FLOW: {
        APPOINTMENT: {
            screen: "APPOINTMENT",
            data: (dynamicData) => ({
                department: [
                    { id: "Cardiology", title: "Cardiology" },
                    { id: "Dermatology", title: "Dermatology" },
                ],
                location: [
                    { id: "1", title: "King’s Cross, London" },
                    { id: "2", title: "Downtown, New York" },
                ],
                is_location_enabled: true,
                date: [
                    { id: "2025-02-28", title: "Fri Feb 28 2025" },
                    { id: "2025-03-01", title: "Sat Mar 1 2025" },
                ],
                is_date_enabled: true,
                time: dynamicData.availableSchedules || [],
                is_time_enabled: true,
            }),
        },
        DETAILS: {
            screen: "DETAILS",
            data: (userInput) => ({
                department: userInput.department,
                location: userInput.location,
                date: userInput.date,
                time: userInput.time,
            }),
        },
        SUMMARY: {
            screen: "SUMMARY",
            data: (userInput) => ({
                appointment: `${userInput.department} at ${userInput.location} on ${userInput.date} at ${userInput.time}`,
                details: `Name: ${userInput.name}\nEmail: ${userInput.email}\nPhone: ${userInput.phone}`,
            }),
        },
        SUCCESS: {
            screen: "SUCCESS",
            data: () => ({
                message: "Appointment booked successfully!",
            }),
        },
    },
    LEADS_FLOW: {
        LEADS: {
            screen: "LEADS",
            data: () => ({
                message: "Please provide your lead information.",
            }),
        },
        DETAILS: {
            screen: "DETAILS",
            data: (userInput) => ({
                name: userInput.name,
                email: userInput.email,
                phone: userInput.phone,
            }),
        },
        SUMMARY: {
            screen: "SUMMARY",
            data: (userInput) => ({
                summary: `Lead Details:\nName: ${userInput.name}\nEmail: ${userInput.email}\nPhone: ${userInput.phone}`,
            }),
        },
        SUCCESS: {
            screen: "SUCCESS",
            data: () => ({
                message: "Lead information saved successfully!",
            }),
        },
    },
};
function handleFlow(flowType, screen, action, data, dynamicData) {
    return __awaiter(this, void 0, void 0, function* () {
        const flowConfig = FLOWS[flowType];
        if (!flowConfig) {
            throw new Error(`Flow type '${flowType}' not found.`);
        }
        const screenConfig = flowConfig[screen];
        if (!screenConfig) {
            throw new Error(`Screen '${screen}' not found in flow type '${flowType}'.`);
        }
        return {
            screen: screenConfig.screen,
            data: typeof screenConfig.data === "function" ? screenConfig.data(Object.assign(Object.assign({}, data), dynamicData)) : screenConfig.data,
        };
    });
}
function fetchDynamicData(flowType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (flowType === "APPOINTMENT_FLOW") {
            const bookedAppointments = yield db.collection("BOOKED_APPOINTMENTS").find().toArray();
            const schedules = [
                { id: "10:30", title: "10:30" },
                { id: "11:30", title: "11:30" },
                { id: "15:00", title: "15:00" },
            ];
            const bookedTimes = new Set(bookedAppointments.map((b) => b.time.replace(".", ":")));
            const availableSchedules = schedules.filter((schedule) => !bookedTimes.has(schedule.id));
            return { availableSchedules };
        }
        return {};
    });
}
function processFlowRequest(decryptedBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const { flow_type, screen, action, data } = decryptedBody;
        if (action === "ping") {
            return { screen: "SUCCESS", data: { status: "active" } };
        }
        const dynamicData = yield fetchDynamicData(flow_type);
        if (action === "INIT") {
            // Default to the first screen in the flow
            return handleFlow(flow_type, "APPOINTMENT", action, {}, dynamicData);
        }
        if (action === "data_exchange") {
            return handleFlow(flow_type, screen, action, data, dynamicData);
        }
        throw new Error("Unhandled action or screen.");
    });
}
