const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Existing functionality would be here

// New Feature: Voice Message Handling
bot.on('voice', async (ctx) => {
    try {
        const voice = ctx.message.voice;
        // Logic to handle voice messages
        await ctx.reply('Voice message received!');
    } catch (error) {
        console.error('Error handling voice message:', error);
        await ctx.reply('Sorry, an error occurred while processing your voice message.');
    }
});

// New Feature: Image Processing
bot.on('photo', async (ctx) => {
    try {
        const photo = ctx.message.photo;
        // Logic to handle images
        await ctx.reply('Image received!');
    } catch (error) {
        console.error('Error handling image:', error);
        await ctx.reply('Sorry, an error occurred while processing your image.');
    }
});

// New Feature: Group Message Replies
bot.on('text', async (ctx) => {
    try {
        if (ctx.chat.type === 'group') {
            // Logic to reply in group chat
            await ctx.reply('Group message received!');
        }
    } catch (error) {
        console.error('Error processing group message:', error);
        await ctx.reply('Sorry, an error occurred while processing your group message.');
    }
});

// New Feature: Music and Video Support
bot.on('audio', async (ctx) => {
    try {
        const audio = ctx.message.audio;
        // Logic to handle audio messages
        await ctx.reply('Audio received!');
    } catch (error) {
        console.error('Error handling audio:', error);
        await ctx.reply('Sorry, an error occurred while processing your audio.');
    }
});

bot.on('video', async (ctx) => {
    try {
        const video = ctx.message.video;
        // Logic to handle video messages
        await ctx.reply('Video received!');
    } catch (error) {
        console.error('Error handling video:', error);
        await ctx.reply('Sorry, an error occurred while processing your video.');
    }
});

// Start bot
bot.launch();


// Add current dashboard implementation with glass morphism here.

