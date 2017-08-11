/**
 * Created by Gareth on 10/08/2017.
 */


const config = {
    server: {
        port : 3000,
        debug: false
    },
    web: {
        title: "FTB FAQ",
        siteName: "FTB Knowledge Base"
    },
    faqTopics: {
        data: [
            { uri: "tLog", category: "twitch", name: "Twitch log upload", title: "Uploading logs when using the Twitch app", url: "https://support.feed-the-beast.com/faq/tLog", enabled: true },
            { uri: "dlTwitch", category: "twitch", name: "Downloading FTB packs on Twitch", title: "Downloading FTB packs with the Twitch app", url: "https://support.feed-the-beast.com/faq/dlTwitchFTB", enabled: true },
            { uri: "logs", category: "legacy", name: "Upload logs with FTB launcher", title: "Uploading logs with the FTB launcher", url: "https://support.feed-the-beast.com/faq/legacyLogs", enabled: true },
            { uri: "twitchBug", category: "twitch", name: "Reporting Twitch app issues", title: "Reporting issues with the Twitch app", url: "https://support.feed-the-beast.com/faq/twitchBug", enabled: true },
            { uri: "dlServer", category: "server", name: "Downloading server files", title: "Downloading Server Files", url: "https://support.feed-the-beast.com/faq/downloadServer", enabled: true },
            { uri: "twitchImport", category: "twitch", name: "Importing packs", title: "Importing Packs", url: "https://support.feed-the-beast.com/faq/twitchImport", enabled: true },
            { uri: "forceUpdate", category: "legacy", name: "Force update", title: "Force Update", url: "https://support.feed-the-beast.com/faq/forceUpdate", enabled: true },
            { uri: "mcSettings", category: "twitch", name: "Twitch Minecraft settings", title: "Changing Minecraft settings with the Twitch app", url: "https://support.feed-the-beast.com/faq/mcSettingsTwitch", enabled: true },
            { uri: "twitchPackRepair", category: "twitch", name: "Repair Twitch pack", title: "Repairing modpacks on the Twitch app", url: "https://support.feed-the-beast.com/faq/twitchPackRepair", enabled: true },
            { uri: "serverSetup", category: "server", name: "Setting up a server", title: "Setting up a server", url: "https://support.feed-the-beast.com/faq/serverSetup", enabled: true },
            { uri: "serverUpdate.hbs", category: "server", name: "Updating a server", title: "Updating a server", url: "https://support.feed-the-beast.com/faq/serverUpdate.hbs", enabled: true },
            { uri: "j8u51", category: "faq", name: "Windows 10 Intel driver issues", title: "Windows 10 Intel driver issues", url: "https://support.feed-the-beast.com/faq/intelJ8U51", enabled: true }
        ]
    }

};

module.exports = config;