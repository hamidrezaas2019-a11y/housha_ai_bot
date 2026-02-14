// ============================================================================
// 🌸 HOSHA ULTIMATE - ربات کامل تلگرام با ۶ موتور AI + پنل شیشه‌ای + فارسی
// ✅ فقط ریپلای | مکث انسانی | تحلیل عکس | دیتابیس D1 | مدیریت کامل
// ============================================================================

// ---------- تنظیمات اصلی ----------
const CONFIG = {
  VERSION: '16.1.0',
  BOT_NAME: '🌸 حوشا',
  ADMIN_IDS: ['5989309344', '7343696403'], // آیدی عددی ادمین‌ها
  
  ENGINES: {
    GEMINI: { name: 'Gemini 1.5 Pro', emoji: '🧠', vision: true, model: 'gemini-1.5-pro', key: 'GEMINI_KEY' },
    GPT4: { name: 'GPT-4o', emoji: '🤖', vision: true, model: 'gpt-4o', key: 'OPENAI_KEY' },
    CLAUDE: { name: 'Claude 3.5', emoji: '🎭', vision: true, model: 'claude-3-5-sonnet-20241022', key: 'CLAUDE_KEY' },
    LLAMA: { name: 'Llama 3.1', emoji: '🦙', vision: false, model: 'meta-llama/llama-3.1-405b-instruct', key: 'OPENROUTER_KEY' },
    DEEPSEEK: { name: 'DeepSeek V3', emoji: '🚀', vision: false, model: 'deepseek-chat', key: 'OPENROUTER_KEY' },
    MISTRAL: { name: 'Mistral Large', emoji: '⚡', vision: false, model: 'mistral-large-latest', key: 'OPENROUTER_KEY' }
  },
  
  TIERS: {
    FREE: { name: 'رایگان', emoji: '🆓', msg: 20, vision: false },
    VIP: { name: 'ویژه', emoji: '💎', msg: -1, vision: true }
  }
};

// ---------- ترجمه‌های فارسی ----------
const LANG = {
  welcome: "🌸 **سلام {{name}}!**\n\nبه ربات حوشا خوش اومدی!\n💎 سطح: {{tier}}\n📊 پیام امروز: {{usage}}",
  help_panel: "╭───────────────────╮\n│  🌸 **راهنمای حوشا**  │\n├───────────────────┤\n│ 💬 چت با AI        │\n│ 📸 تحلیل عکس       │\n│ 💎 VIP و اشتراک    │\n│ 👤 تنظیمات حساب    │\n│ 📊 آمار من         │\n╰───────────────────╯",
  chat: "💬 **چت با AI**\nروی پیام‌هام ریپلای کن.",
  vision: "📸 **تحلیل عکس**\nعکس + توضیح بفرست. (فقط کاربران ویژه)",
  vip: "💎 **پنل VIP**\n✨ دسترسی نامحدود به همه مدل‌ها و تحلیل عکس\nبرای دریافت VIP با ادمین تماس بگیر.",
  settings: "👤 **تنظیمات حساب**\nنام: {{name}}\nمدل فعلی: {{model}}\nحالت انسانی: {{human}}",
  stats: "📊 **آمار شما**\nپیام‌ها: {{total}}\nدعوت‌ها: {{ref}}",
  admin: "🔐 **پنل مدیریت**\n👥 مدیریت کاربران\n📊 آمار سیستم\n💎 مدیریت VIP\n📢 ارسال همگانی",
  back: "🔙 بازگشت",
  close: "✅ بسته شد",
  thinking: "🤔 در حال فکر کردن...",
  error: "❌ خطایی رخ داد. دوباره تلاش کن.",
  reply_only: "⚠️ روی پیام‌های من ریپلای کن.",
  image_proc: "🖼️ در حال تحلیل عکس...",
  no_vision: "🔒 تحلیل عکس فقط برای کاربران ویژه",
  blocked: "⛔ شما مسدود شده‌اید. با ادمین تماس بگیرید.",
  user_not_found: "❌ کاربر یافت نشد.",
  already_vip: "👑 کاربر هم‌اکنون ویژه است.",
  set_vip_success: "✅ سطح کاربر به VIP تغییر یافت.",
  set_free_success: "✅ سطح کاربر به رایگان تغییر یافت.",
  broadcast_start: "📢 ارسال همگانی آغاز شد.",
  broadcast_progress: "در حال ارسال... {{sent}} از {{total}}",
  broadcast_done: "✅ ارسال همگانی به پایان رسید. موفق: {{success}}، ناموفق: {{fail}}",
  invalid_command: "❌ دستور نامعتبر. راهنما: /help",
  model_list: "مدل‌های موجود:\n{{list}}",
  model_set: "✅ مدل به {{model}} تغییر یافت.",
  human_on: "✅ حالت انسانی فعال شد",
  human_off: "❌ حالت انسانی غیرفعال شد",
  stats_system: "📊 **آمار سیستم**\nکل کاربران: {{total}}\nویژه: {{vip}}\nمسدود: {{blocked}}"
};

// ---------- پنل شیشه‌ای ----------
const PANELS = {
  help: {
    text: LANG.help_panel,
    keyboard: { inline_keyboard: [
      [{ text: '💬 چت با AI', callback_data: 'help_chat' }, { text: '📸 تحلیل عکس', callback_data: 'help_vision' }],
      [{ text: '💎 VIP و اشتراک', callback_data: 'help_vip' }, { text: '👤 تنظیمات حساب', callback_data: 'help_settings' }],
      [{ text: '📊 آمار من', callback_data: 'help_stats' }, { text: '❌ بستن', callback_data: 'close' }]
    ]}
  },
  admin: {
    text: LANG.admin,
    keyboard: { inline_keyboard: [
      [{ text: '👥 کاربران', callback_data: 'admin_users' }, { text: '📊 آمار', callback_data: 'admin_stats' }],
      [{ text: '💎 VIP', callback_data: 'admin_vip' }, { text: '📢 همگانی', callback_data: 'admin_broadcast' }],
      [{ text: '❌ بستن', callback_data: 'close' }]
    ]}
  },
  back: { inline_keyboard: [[{ text: '🔙 بازگشت', callback_data: 'back' }, { text: '❌ بستن', callback_data: 'close' }]] }
};

// ---------- توابع کمکی ----------
const api = (token, method, payload) => 
  fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  }).then(res => res.json()).catch(() => null);

// ---------- مکث انسانی ----------
async function sendHumanLike(chatId, text, token) {
  await api(token, 'sendChatAction', { chat_id: chatId, action: 'typing' });
  await new Promise(r => setTimeout(r, 2000 + Math.random() * 2000));
  
  const chunks = text.match(/.{1,2000}/g) || [text];
  for (let i = 0; i < chunks.length; i++) {
    await api(token, 'sendMessage', { chat_id: chatId, text: chunks[i] });
    if (i < chunks.length - 1) {
      await new Promise(r => setTimeout(r, 1000 + Math.random() * 1500));
      await api(token, 'sendChatAction', { chat_id: chatId, action: 'typing' });
    }
  }
}

// ---------- هوش مصنوعی ----------
async function askAI(prompt, modelKey, env) {
  const model = CONFIG.ENGINES[modelKey];
  if (!model) return 'مدل نامعتبر';
  
  try {
    if (modelKey === 'GEMINI') {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model.model}:generateContent?key=${env[model.key]}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'پاسخی دریافت نشد';
    }
    
    if (modelKey === 'GPT4') {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST', headers: { 'Authorization': `Bearer ${env[model.key]}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: model.model, messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
    }
    
    if (modelKey === 'CLAUDE') {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST', headers: { 'x-api-key': env[model.key], 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
        body: JSON.stringify({ model: model.model, max_tokens: 1024, messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      return data.content?.[0]?.text || 'پاسخی دریافت نشد';
    }
    
    // OpenRouter (برای Llama, DeepSeek, Mistral)
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST', headers: { 'Authorization': `Bearer ${env[model.key]}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: model.model, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await res.json();
    return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
  } catch (e) {
    return `❌ خطا: ${e.message}`;
  }
}

// ---------- تحلیل عکس با Gemini Vision ----------
async function analyzeImage(imageUrl, prompt, env) {
  try {
    const img = await fetch(imageUrl);
    const buf = await img.arrayBuffer();
    const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${env.GEMINI_KEY}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt || 'این عکس رو تحلیل کن' }, { inline_data: { mime_type: 'image/jpeg', data: b64 } }] }] })
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'تحلیل ناموفق';
  } catch (e) {
    return `❌ خطا: ${e.message}`;
  }
}

// ---------- دیتابیس D1 ----------
async function initDB(db) {
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT,
    tier TEXT DEFAULT 'FREE',
    model TEXT DEFAULT 'GEMINI',
    human INTEGER DEFAULT 1,
    usage INTEGER DEFAULT 0,
    ref TEXT,
    blocked INTEGER DEFAULT 0,
    created DATE DEFAULT CURRENT_DATE
  )`).catch(() => {});
}

async function getUser(db, userId) {
  let user = await db.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first();
  if (!user) {
    await db.prepare('INSERT INTO users (id, name) VALUES (?, ?)').bind(userId, 'کاربر').run();
    user = await db.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first();
  }
  return user;
}

// ---------- Worker اصلی ----------
let initialized = false;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/webhook' || request.method !== 'POST')
      return new Response('Not Found', { status: 404 });

    // مقداردهی اولیه دیتابیس
    if (!initialized && env.DB) {
      await initDB(env.DB);
      initialized = true;
    }

    const update = await request.json();
    const token = env.TELEGRAM_BOT_TOKEN;

    // ---------- کلیک روی دکمه‌ها ----------
    if (update.callback_query) {
      const cb = update.callback_query;
      const chatId = cb.message.chat.id, msgId = cb.message.message_id, data = cb.data, userId = cb.from.id.toString();
      
      // بستن پیام
      if (data === 'close') {
        await api(token, 'deleteMessage', { chat_id: chatId, message_id: msgId });
        return new Response('OK');
      }
      
      // بازگشت به منوی اصلی
      if (data === 'back') {
        await api(token, 'editMessageText', { 
          chat_id: chatId, message_id: msgId, text: PANELS.help.text, 
          parse_mode: 'Markdown', reply_markup: PANELS.help.keyboard 
        });
        return new Response('OK');
      }
      
      // منوی راهنما
      if (data.startsWith('help_')) {
        let text = '';
        if (data === 'help_chat') text = LANG.chat;
        else if (data === 'help_vision') text = LANG.vision;
        else if (data === 'help_vip') text = LANG.vip;
        else if (data === 'help_settings') {
          const user = await getUser(env.DB, userId);
          text = LANG.settings.replace('{{name}}', user.name).replace('{{model}}', CONFIG.ENGINES[user.model]?.name || 'نامشخص').replace('{{human}}', user.human ? '✅' : '❌');
        }
        else if (data === 'help_stats') {
          const user = await getUser(env.DB, userId);
          text = LANG.stats.replace('{{total}}', user.usage || 0).replace('{{ref}}', user.ref || 0);
        }
        await api(token, 'editMessageText', { chat_id: chatId, message_id: msgId, text, parse_mode: 'Markdown', reply_markup: PANELS.back });
        return new Response('OK');
      }
      
      // منوی ادمین (فقط برای ادمین‌ها)
      if (data.startsWith('admin_') && CONFIG.ADMIN_IDS.includes(userId)) {
        let text = '';
        if (data === 'admin_users') text = '👥 دستورات مدیریت کاربران:\n/block [آیدی] - مسدود\n/unblock [آیدی] - رفع مسدود\n/list [صفحه] - لیست کاربران';
        else if (data === 'admin_stats') {
          const total = await env.DB.prepare('SELECT COUNT(*) as c FROM users').first() || {c:0};
          const vip = await env.DB.prepare("SELECT COUNT(*) as c FROM users WHERE tier='VIP'").first() || {c:0};
          const blocked = await env.DB.prepare('SELECT COUNT(*) as c FROM users WHERE blocked=1').first() || {c:0};
          text = LANG.stats_system.replace('{{total}}', total.c).replace('{{vip}}', vip.c).replace('{{blocked}}', blocked.c);
        }
        else if (data === 'admin_vip') text = '💎 دستورات مدیریت VIP:\n/giveplan [آیدی] [VIP/FREE] - تغییر سطح';
        else if (data === 'admin_broadcast') text = '📢 /broadcast [پیام] - ارسال همگانی';
        await api(token, 'editMessageText', { chat_id: chatId, message_id: msgId, text, parse_mode: 'Markdown', reply_markup: PANELS.back });
        return new Response('OK');
      }
      
      return new Response('OK');
    }

    // ---------- پیام ----------
    if (update.message) {
      const msg = update.message;
      const chatId = msg.chat.id, userId = msg.from.id.toString(), text = msg.text || '', photo = msg.photo, replyTo = msg.reply_to_message;

      // ثبت یا به‌روزرسانی کاربر
      let user = await getUser(env.DB, userId);
      if (msg.from.first_name && user.name !== msg.from.first_name) {
        await env.DB.prepare('UPDATE users SET name = ? WHERE id = ?').bind(msg.from.first_name, userId).run();
        user.name = msg.from.first_name;
      }

      // بررسی مسدود بودن
      if (user.blocked) {
        await api(token, 'sendMessage', { chat_id: chatId, text: LANG.blocked });
        return new Response('OK');
      }

      // ---------- دستورات عمومی ----------
      if (text === '/start') {
        const welcome = LANG.welcome.replace('{{name}}', user.name)
          .replace('{{tier}}', CONFIG.TIERS[user.tier]?.emoji + ' ' + CONFIG.TIERS[user.tier]?.name)
          .replace('{{usage}}', user.usage || 0);
        await api(token, 'sendMessage', { chat_id: chatId, text: welcome, parse_mode: 'Markdown' });
        return new Response('OK');
      }
      
      if (text === '/help') {
        await api(token, 'sendMessage', { chat_id: chatId, text: PANELS.help.text, parse_mode: 'Markdown', reply_markup: PANELS.help.keyboard });
        return new Response('OK');
      }
      
      // ---------- دستورات ادمین ----------
      if (text.startsWith('/admin') && CONFIG.ADMIN_IDS.includes(userId)) {
        await api(token, 'sendMessage', { chat_id: chatId, text: PANELS.admin.text, parse_mode: 'Markdown', reply_markup: PANELS.admin.keyboard });
        return new Response('OK');
      }
      
      if (text.startsWith('/block') && CONFIG.ADMIN_IDS.includes(userId)) {
        const targetId = text.split(' ')[1];
        if (!targetId) {
          await api(token, 'sendMessage', { chat_id: chatId, text: '⚠️ آیدی کاربر را وارد کنید: /block 123456' });
          return new Response('OK');
        }
        const targetUser = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(targetId).first();
        if (!targetUser) {
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.user_not_found });
          return new Response('OK');
        }
        await env.DB.prepare('UPDATE users SET blocked = 1 WHERE id = ?').bind(targetId).run();
        await api(token, 'sendMessage', { chat_id: chatId, text: `⛔ کاربر ${targetId} مسدود شد.` });
        return new Response('OK');
      }
      
      if (text.startsWith('/unblock') && CONFIG.ADMIN_IDS.includes(userId)) {
        const targetId = text.split(' ')[1];
        if (!targetId) {
          await api(token, 'sendMessage', { chat_id: chatId, text: '⚠️ آیدی کاربر را وارد کنید: /unblock 123456' });
          return new Response('OK');
        }
        const targetUser = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(targetId).first();
        if (!targetUser) {
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.user_not_found });
          return new Response('OK');
        }
        await env.DB.prepare('UPDATE users SET blocked = 0 WHERE id = ?').bind(targetId).run();
        await api(token, 'sendMessage', { chat_id: chatId, text: `✅ کاربر ${targetId} رفع مسدود شد.` });
        return new Response('OK');
      }
      
      if (text.startsWith('/list') && CONFIG.ADMIN_IDS.includes(userId)) {
        const page = parseInt(text.split(' ')[1]) || 1;
        const limit = 10;
        const offset = (page - 1) * limit;
        const users = await env.DB.prepare('SELECT id, name, tier, blocked FROM users ORDER BY created DESC LIMIT ? OFFSET ?').bind(limit, offset).all();
        let response = `👥 لیست کاربران (صفحه ${page}):\n`;
        users.results.forEach(u => {
          response += `\n🆔 ${u.id} | ${u.name} | ${u.tier} ${u.blocked ? '⛔' : ''}`;
        });
        response += `\n\nبرای صفحه بعد: /list ${page+1}`;
        await api(token, 'sendMessage', { chat_id: chatId, text: response });
        return new Response('OK');
      }
      
      if (text.startsWith('/giveplan') && CONFIG.ADMIN_IDS.includes(userId)) {
        const parts = text.split(' ');
        if (parts.length < 3) {
          await api(token, 'sendMessage', { chat_id: chatId, text: '⚠️ فرمت: /giveplan [آیدی] [VIP/FREE]' });
          return new Response('OK');
        }
        const targetId = parts[1];
        const newTier = parts[2].toUpperCase();
        if (!CONFIG.TIERS[newTier]) {
          await api(token, 'sendMessage', { chat_id: chatId, text: '❌ سطح نامعتبر. فقط VIP یا FREE' });
          return new Response('OK');
        }
        const targetUser = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(targetId).first();
        if (!targetUser) {
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.user_not_found });
          return new Response('OK');
        }
        await env.DB.prepare('UPDATE users SET tier = ? WHERE id = ?').bind(newTier, targetId).run();
        await api(token, 'sendMessage', { chat_id: chatId, text: `✅ سطح کاربر ${targetId} به ${newTier} تغییر یافت.` });
        return new Response('OK');
      }
      
      if (text.startsWith('/broadcast') && CONFIG.ADMIN_IDS.includes(userId)) {
        const message = text.substring(10).trim();
        if (!message) {
          await api(token, 'sendMessage', { chat_id: chatId, text: '⚠️ پیام را وارد کنید: /broadcast سلام به همه' });
          return new Response('OK');
        }
        // دریافت همه کاربران (غیرمسدود)
        const users = await env.DB.prepare('SELECT id FROM users WHERE blocked = 0').all();
        const total = users.results.length;
        await api(token, 'sendMessage', { chat_id: chatId, text: LANG.broadcast_start });
        
        let sent = 0, failed = 0;
        for (const u of users.results) {
          try {
            await api(token, 'sendMessage', { chat_id: u.id, text: `📢 **پیام همگانی:**\n${message}`, parse_mode: 'Markdown' });
            sent++;
          } catch {
            failed++;
          }
          await new Promise(r => setTimeout(r, 50));
        }
        await api(token, 'sendMessage', { chat_id: chatId, text: LANG.broadcast_done.replace('{{success}}', sent).replace('{{fail}}', failed) });
        return new Response('OK');
      }
      
      // ---------- دستورات کاربری ----------
      if (text.startsWith('/setmodel')) {
        const modelKey = text.split(' ')[1]?.toUpperCase();
        if (modelKey && CONFIG.ENGINES[modelKey]) {
          await env.DB.prepare('UPDATE users SET model = ? WHERE id = ?').bind(modelKey, userId).run();
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.model_set.replace('{{model}}', CONFIG.ENGINES[modelKey].name) });
        } else {
          let list = '';
          for (let [k, m] of Object.entries(CONFIG.ENGINES)) list += `${m.emoji} ${m.name} (/${k})\n`;
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.model_list.replace('{{list}}', list) });
        }
        return new Response('OK');
      }
      
      if (text === '/human') {
        const newVal = user.human ? 0 : 1;
        await env.DB.prepare('UPDATE users SET human = ? WHERE id = ?').bind(newVal, userId).run();
        await api(token, 'sendMessage', { chat_id: chatId, text: newVal ? LANG.human_on : LANG.human_off });
        return new Response('OK');
      }

      if (text === '/me') {
        const stats = LANG.stats.replace('{{total}}', user.usage || 0).replace('{{ref}}', user.ref || 0);
        await api(token, 'sendMessage', { chat_id: chatId, text: stats, parse_mode: 'Markdown' });
        return new Response('OK');
      }

      // ---------- تحلیل عکس ----------
      if (photo) {
        if (user.tier !== 'VIP' && !CONFIG.ADMIN_IDS.includes(userId)) {
          await api(token, 'sendMessage', { chat_id: chatId, text: LANG.no_vision });
          return new Response('OK');
        }
        
        const fileId = photo[photo.length - 1].file_id;
        const fileRes = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
        const fileData = await fileRes.json();
        const imageUrl = `https://api.telegram.org/file/bot${token}/${fileData.result.file_path}`;
        
        await api(token, 'sendMessage', { chat_id: chatId, text: LANG.image_proc });
        const analysis = await analyzeImage(imageUrl, msg.caption || '', env);
        await sendHumanLike(chatId, analysis, token);
        return new Response('OK');
      }

      // ---------- چت معمولی (فقط ریپلای) ----------
      if (text && replyTo && replyTo.from?.is_bot) {
        await api(token, 'sendChatAction', { chat_id: chatId, action: 'typing' });
        
        // دریافت مدل کاربر
        const modelKey = user.model || 'GEMINI';
        const response = await askAI(text, modelKey, env);
        
        // بروزرسانی آمار
        await env.DB.prepare('UPDATE users SET usage = usage + 1 WHERE id = ?').bind(userId).run();
        
        if (user.human) {
          await sendHumanLike(chatId, response, token);
        } else {
          await api(token, 'sendMessage', { chat_id: chatId, text: response });
        }
        return new Response('OK');
      }

      // اگر ریپلای نبود و دستور هم نبود
      if (text && !text.startsWith('/')) {
        await api(token, 'sendMessage', { chat_id: chatId, text: LANG.reply_only });
      }
    }

    return new Response('OK');
  }
};
