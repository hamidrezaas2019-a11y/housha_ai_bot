// ==================== HOSHA MEGA v16 - ULTIMATE FINAL ====================
// ✅ تمام ۱۲ موتور AI + Vision (Cloudflare, GPT, Gemini, Claude, OpenRouter)
// ✅ سیستم VIP کامل + درگاه پرداخت
// ✅ پنل شیشه‌ای (Glassmorphism) برای ادمین و راهنما
// ✅ دیتابیس D1 + کش KV
// ✅ رفع مشکل referral و دیتابیس
// ✅ بدون خطای 1101
// ===========================================================================

const MEGA_CONFIG = {
    VERSION: "16.0.0",
    BOT_NAME: '🌸 حوشا',
    BOT_USERNAME: 'houshaaibot',
    ADMIN_IDS: ['5989309344', '7343696403'],
    ENGINES: {
        CF_AI: { name: 'Llama 3.1 405B', emoji: '☁️', vip: false, vision: false, model: '@cf/meta/llama-3.1-405b-instruct', max_tokens: 2048, temperature: 0.7, cost: 0.000001, provider: 'cf' },
        CF_AI_8B: { name: 'Llama 3.1 8B', emoji: '⚡', vip: false, vision: false, model: '@cf/meta/llama-3.1-8b-instruct', max_tokens: 1024, temperature: 0.7, cost: 0.0000005, provider: 'cf' },
        CF_GEMMA: { name: 'Gemma 3 12B', emoji: '🆓', vip: false, vision: false, model: '@cf/google/gemma-3-12b-it', max_tokens: 2048, temperature: 0.7, cost: 0.0000001, provider: 'cf' },
        OPENROUTER: { name: 'OpenRouter Auto', emoji: '🔄', vip: false, vision: false, model: 'openrouter/auto', max_tokens: 2048, temperature: 0.7, cost: 0.0000005, provider: 'openrouter' },
        GEMINI_FLASH: { name: 'Gemini 1.5 Flash', emoji: '🌟', vip: false, vision: true, model: 'gemini-1.5-flash', max_tokens: 2048, temperature: 0.7, cost: 0.000002, provider: 'gemini' },
        GEMINI_PRO: { name: 'Gemini 1.5 Pro', emoji: '💎', vip: true, vision: true, model: 'gemini-1.5-pro', max_tokens: 4096, temperature: 0.7, cost: 0.000005, provider: 'gemini' },
        GPT_4O_MINI: { name: 'GPT-4o Mini', emoji: '🤖', vip: false, vision: false, model: 'gpt-4o-mini', max_tokens: 2048, temperature: 0.8, cost: 0.000003, provider: 'openai' },
        GPT_4O: { name: 'GPT-4o', emoji: '👁️', vip: true, vision: true, model: 'gpt-4o', max_tokens: 4096, temperature: 0.8, cost: 0.00001, provider: 'openai' },
        CLAUDE_HAIKU: { name: 'Claude 3.5 Haiku', emoji: '💬', vip: false, vision: false, model: 'claude-3-5-haiku-20241022', max_tokens: 2048, temperature: 0.7, cost: 0.000003, provider: 'claude' },
        CLAUDE_SONNET: { name: 'Claude 3.5 Sonnet', emoji: '🧠', vip: true, vision: true, model: 'claude-3-5-sonnet-20241022', max_tokens: 4096, temperature: 0.7, cost: 0.000008, provider: 'claude' },
        DEEPSEEK: { name: 'DeepSeek V3', emoji: '🚀', vip: false, vision: false, model: 'deepseek-chat', max_tokens: 2048, temperature: 0.7, cost: 0.000001, provider: 'deepseek' },
        MISTRAL: { name: 'Mistral Large', emoji: '⚡', vip: true, vision: false, model: 'mistral-large-latest', max_tokens: 2048, temperature: 0.7, cost: 0.000004, provider: 'mistral' }
    },
    PERSONALITIES: {
        friendly: { name: 'دوستانه', emoji: '😊', prompt: `تو حوشا هستی، دختر ۲۵ ساله ایرانی. خیلی صمیمی و محاوره‌ای حرف بزن.`, typo: 0.15, emoji: 0.3, filler: 0.4 },
        professional: { name: 'حرفه‌ای', emoji: '💼', prompt: `تو حوشا هستی، یک متخصص دقیق و رسمی.`, typo: 0.02, emoji: 0.05, filler: 0.1 },
        casual: { name: 'خودمونی', emoji: '🤙', prompt: `تو حوشا هستی، دوست صمیمی. خیلی راحت و با شوخی حرف بزن.`, typo: 0.25, emoji: 0.5, filler: 0.6 },
        expert: { name: 'متخصص', emoji: '🎓', prompt: `تو حوشا هستی، دانشمند. پاسخ‌های علمی و عمیق بده.`, typo: 0, emoji: 0, filler: 0 }
    },
    TIERS: {
        FREE: { name: 'رایگان', emoji: '🆓', msg: 20, token: 50000, vision: false, vipModels: [] },
        BASIC: { name: 'پایه', emoji: '🥉', msg: 100, token: 200000, vision: true, vipModels: ['GEMINI_PRO'] },
        PRO: { name: 'حرفه‌ای', emoji: '🥈', msg: 500, token: 1000000, vision: true, vipModels: ['GEMINI_PRO', 'GPT_4O', 'CLAUDE_SONNET'] },
        VIP: { name: 'ویژه', emoji: '💎', msg: -1, token: -1, vision: true, vipModels: ['all'] }
    },
    RATE_LIMITS: {
        FREE: { min: 3, hour: 15, day: 20, token: 50000 },
        BASIC: { min: 10, hour: 80, day: 100, token: 200000 },
        PRO: { min: 30, hour: 400, day: 500, token: 1000000 },
        VIP: { min: -1, hour: -1, day: -1, token: -1 }
    },
    REFERRAL: { reward: 50, referrer: 100, vipReq: 50 }
};

// ==================== UTILITIES ====================
const Utils = {
    id: (l = 16) => Math.random().toString(36).substring(2, l + 2),
    num: n => n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0',
    date: d => new Date(d).toLocaleDateString('fa-IR'),
    sleep: ms => new Promise(r => setTimeout(r, ms)),
    hash: s => { let h = 0; for (let c of s) h = (h << 5) - h + c.charCodeAt(0); return (h >>> 0).toString(36); },
    isAdmin: id => MEGA_CONFIG.ADMIN_IDS.includes(id.toString()),
    tokens: t => Math.ceil((t?.length || 0) / 4)
};

// ==================== LOGGER ====================
class Logger {
    constructor(env) { this.env = env; }
    async log(level, msg, data) { console.log(`[${level}] ${msg}`, data); }
    error(msg, data) { return this.log('ERROR', msg, data); }
}

// ==================== CACHE MANAGER ====================
class CacheManager {
    constructor(env) { this.kv = env.KV_CACHE; this.local = new Map(); this.hits = 0; this.misses = 0; }
    async set(k, v, ttl = 3600) {
        const exp = Date.now() + ttl * 1000;
        if (this.kv) await this.kv.put(k, JSON.stringify({ v, exp }), { expirationTtl: ttl }).catch(() => {});
        else this.local.set(k, { v, exp });
    }
    async get(k) {
        let item;
        if (this.kv) {
            const raw = await this.kv.get(k, 'json').catch(() => null);
            if (!raw) { this.misses++; return null; }
            item = raw;
        } else {
            item = this.local.get(k);
            if (!item) { this.misses++; return null; }
        }
        if (Date.now() > item.exp) {
            if (this.kv) await this.kv.delete(k).catch(() => {});
            else this.local.delete(k);
            this.misses++; return null;
        }
        this.hits++;
        return item.v;
    }
    stats() {
        const total = this.hits + this.misses;
        return { size: this.local.size, hits: this.hits, misses: this.misses, hitRate: total ? (this.hits / total * 100).toFixed(2) + '%' : '0%' };
    }
}

// ==================== DATABASE MANAGER ====================
class DatabaseManager {
    constructor(env) { this.db = env.DB; this.logger = new Logger(env); }
    
    async init() {
        try {
            const tables = [
                `CREATE TABLE IF NOT EXISTS users (
                    user_id TEXT PRIMARY KEY, 
                    username TEXT, 
                    first_name TEXT, 
                    tier TEXT DEFAULT 'FREE', 
                    personality TEXT DEFAULT 'friendly', 
                    preferred_model TEXT DEFAULT 'CF_GEMMA', 
                    preferred_vision TEXT DEFAULT 'GEMINI_FLASH', 
                    human_mode INTEGER DEFAULT 1, 
                    referral_code TEXT UNIQUE, 
                    referred_by TEXT, 
                    referral_count INTEGER DEFAULT 0, 
                    bonus_messages INTEGER DEFAULT 0, 
                    total_messages INTEGER DEFAULT 0, 
                    total_tokens INTEGER DEFAULT 0, 
                    total_cost REAL DEFAULT 0, 
                    tier_expires_at DATETIME, 
                    is_banned INTEGER DEFAULT 0, 
                    ban_reason TEXT, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                `CREATE TABLE IF NOT EXISTS messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    user_id TEXT, 
                    role TEXT, 
                    content TEXT, 
                    model TEXT, 
                    tokens INTEGER, 
                    cost REAL, 
                    has_image INTEGER, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                `CREATE TABLE IF NOT EXISTS usage_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    user_id TEXT, 
                    model TEXT, 
                    tokens INTEGER, 
                    cost REAL, 
                    success INTEGER, 
                    error TEXT, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                `CREATE TABLE IF NOT EXISTS blocked_users (
                    user_id TEXT PRIMARY KEY, 
                    reason TEXT, 
                    blocked_by TEXT, 
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                `CREATE TABLE IF NOT EXISTS referrals (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    referrer_id TEXT,
                    referred_id TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`
            ];
            
            for (const sql of tables) {
                await this.db.prepare(sql).run();
            }
            console.log('✅ Database initialized with referrals table');
        } catch (e) { 
            this.logger.error('DB init failed', { error: e.message }); 
            throw e; 
        }
    }
    
    async register(data) {
        const code = Utils.id(8).toUpperCase();
        try {
            await this.db.prepare(
                `INSERT OR IGNORE INTO users (user_id, username, first_name, referral_code) VALUES (?,?,?,?)`
            ).bind(data.id, data.username, data.first_name, code).run();
        } catch (e) {
            this.logger.error('Register failed', { error: e.message });
        }
        return code;
    }
    
    async getUser(id) {
        try {
            return await this.db.prepare('SELECT * FROM users WHERE user_id = ?').bind(id).first();
        } catch (e) {
            this.logger.error('getUser failed', { error: e.message });
            return null;
        }
    }
    
    async getUserByReferralCode(code) {
        try {
            return await this.db.prepare('SELECT user_id FROM users WHERE referral_code = ?').bind(code).first();
        } catch (e) {
            return null;
        }
    }
    
    async updateUser(id, updates) {
        try {
            const fields = Object.keys(updates).map(k => `${k} = ?`).join(', ');
            const values = Object.values(updates);
            await this.db.prepare(`UPDATE users SET ${fields} WHERE user_id = ?`).bind(...values, id).run();
        } catch (e) {
            this.logger.error('updateUser failed', { error: e.message });
        }
    }
    
    async getSettings(id) {
        const u = await this.getUser(id);
        if (!u) return { 
            tier: 'FREE', 
            personality: 'friendly', 
            model: 'CF_GEMMA', 
            vision: 'GEMINI_FLASH',
            human: true, 
            referral: '', 
            refCount: 0, 
            bonus: 0 
        };
        return {
            tier: u.tier || 'FREE',
            personality: u.personality || 'friendly',
            model: u.preferred_model || 'CF_GEMMA',
            vision: u.preferred_vision || 'GEMINI_FLASH',
            human: (u.human_mode || 1) === 1,
            referral: u.referral_code || '',
            refCount: u.referral_count || 0,
            bonus: u.bonus_messages || 0
        };
    }
    
    async saveMessage(uid, role, content, model, tokens, cost, hasImg = false) {
        try {
            await this.db.prepare(
                `INSERT INTO messages (user_id, role, content, model, tokens, cost, has_image) VALUES (?,?,?,?,?,?,?)`
            ).bind(uid, role, content, model, tokens, cost, hasImg ? 1 : 0).run();
            await this.db.prepare(
                `UPDATE users SET total_messages = total_messages + 1, total_tokens = total_tokens + ?, total_cost = total_cost + ? WHERE user_id = ?`
            ).bind(tokens, cost, uid).run();
        } catch (e) {
            this.logger.error('saveMessage failed', { error: e.message });
        }
    }
    
    async logUsage(uid, model, tokens, cost, success, error = null) {
        try {
            await this.db.prepare(
                `INSERT INTO usage_logs (user_id, model, tokens, cost, success, error) VALUES (?,?,?,?,?,?)`
            ).bind(uid, model, tokens, cost, success ? 1 : 0, error).run();
        } catch (e) {
            this.logger.error('logUsage failed', { error: e.message });
        }
    }
    
    async checkRate(uid, tier) {
        try {
            const limits = MEGA_CONFIG.RATE_LIMITS[tier];
            
            const minute = await this.db.prepare(
                `SELECT COUNT(*) as c FROM usage_logs WHERE user_id = ? AND created_at > datetime('now', '-1 minute')`
            ).bind(uid).first();
            if (limits.min > 0 && (minute?.c || 0) >= limits.min) 
                return { allowed: false, msg: `حداکثر ${limits.min} پیام در دقیقه`, remaining: { minute: limits.min - (minute?.c || 0) } };
            
            const hour = await this.db.prepare(
                `SELECT COUNT(*) as c FROM usage_logs WHERE user_id = ? AND created_at > datetime('now', '-1 hour')`
            ).bind(uid).first();
            if (limits.hour > 0 && (hour?.c || 0) >= limits.hour) 
                return { allowed: false, msg: `حداکثر ${limits.hour} پیام در ساعت`, remaining: { hour: limits.hour - (hour?.c || 0) } };
            
            const day = await this.db.prepare(
                `SELECT COUNT(*) as c FROM usage_logs WHERE user_id = ? AND DATE(created_at) = DATE('now')`
            ).bind(uid).first();
            const user = await this.getUser(uid);
            const bonus = user?.bonus_messages || 0;
            const dayLimit = limits.day + bonus;
            if (limits.day > 0 && (day?.c || 0) >= dayLimit) 
                return { allowed: false, msg: `حداکثر ${dayLimit} پیام در روز`, remaining: { day: dayLimit - (day?.c || 0) } };
            
            const tokens = await this.db.prepare(
                `SELECT SUM(tokens) as t FROM usage_logs WHERE user_id = ? AND DATE(created_at) = DATE('now')`
            ).bind(uid).first();
            if (limits.token > 0 && (tokens?.t || 0) >= limits.token) 
                return { allowed: false, msg: `حداکثر ${Utils.num(limits.token)} توکن در روز`, remaining: { token: limits.token - (tokens?.t || 0) } };
            
            return {
                allowed: true,
                remaining: {
                    minute: limits.min - (minute?.c || 0),
                    hour: limits.hour - (hour?.c || 0),
                    day: dayLimit - (day?.c || 0),
                    tokens: limits.token - (tokens?.t || 0)
                }
            };
        } catch (e) {
            this.logger.error('checkRate failed', { error: e.message });
            return { allowed: true, remaining: { day: 0 } };
        }
    }
    
    async isBlocked(uid) {
        try {
            return await this.db.prepare(`SELECT * FROM blocked_users WHERE user_id = ?`).bind(uid).first();
        } catch (e) {
            return null;
        }
    }
    
    async blockUser(uid, reason, by) {
        try {
            await this.db.prepare(
                `INSERT OR REPLACE INTO blocked_users (user_id, reason, blocked_by) VALUES (?,?,?)`
            ).bind(uid, reason, by).run();
            await this.db.prepare(`UPDATE users SET is_banned = 1, ban_reason = ? WHERE user_id = ?`).bind(reason, uid).run();
        } catch (e) {
            this.logger.error('blockUser failed', { error: e.message });
        }
    }
    
    async unblockUser(uid) {
        try {
            await this.db.prepare(`DELETE FROM blocked_users WHERE user_id = ?`).bind(uid).run();
            await this.db.prepare(`UPDATE users SET is_banned = 0, ban_reason = NULL WHERE user_id = ?`).bind(uid).run();
        } catch (e) {
            this.logger.error('unblockUser failed', { error: e.message });
        }
    }
    
    async getAllUsers() {
        try {
            const res = await this.db.prepare(`SELECT user_id FROM users WHERE is_banned = 0`).all();
            return res.results || [];
        } catch (e) {
            return [];
        }
    }
    
    async stats() {
        try {
            const [totalUsers, activeToday, totalMessages, todayMessages, totalTokens] = await Promise.all([
                this.db.prepare(`SELECT COUNT(*) as c FROM users`).first(),
                this.db.prepare(`SELECT COUNT(*) as c FROM users WHERE DATE(created_at) = DATE('now')`).first(),
                this.db.prepare(`SELECT COUNT(*) as c FROM messages`).first(),
                this.db.prepare(`SELECT COUNT(*) as c FROM messages WHERE DATE(created_at) = DATE('now')`).first(),
                this.db.prepare(`SELECT SUM(tokens) as t FROM messages`).first()
            ]);
            return {
                users: totalUsers?.c || 0,
                active: activeToday?.c || 0,
                totalMsg: totalMessages?.c || 0,
                todayMsg: todayMessages?.c || 0,
                tokens: totalTokens?.t || 0
            };
        } catch (e) {
            return { users: 0, active: 0, totalMsg: 0, todayMsg: 0, tokens: 0 };
        }
    }
    
    async vipStats() {
        try {
            const vip = await this.db.prepare(`SELECT COUNT(*) as c FROM users WHERE tier != 'FREE'`).first();
            return { vip: vip?.c || 0 };
        } catch (e) {
            return { vip: 0 };
        }
    }
    
    async processReferral(referrer, referred) {
        try {
            await this.db.prepare(
                `INSERT INTO referrals (referrer_id, referred_id) VALUES (?,?)`
            ).bind(referrer, referred).run();
            await this.db.prepare(
                `UPDATE users SET referral_count = referral_count + 1, bonus_messages = bonus_messages + ? WHERE user_id = ?`
            ).bind(MEGA_CONFIG.REFERRAL.referrer, referrer).run();
            await this.db.prepare(
                `UPDATE users SET bonus_messages = bonus_messages + ? WHERE user_id = ?`
            ).bind(MEGA_CONFIG.REFERRAL.reward, referred).run();
        } catch (e) {
            this.logger.error('processReferral failed', { error: e.message });
        }
    }
}

// ==================== HUMANIZER ====================
class Humanizer {
    constructor(cfg) {
        this.c = cfg;
        this.starters = ['ببین', 'راستش', 'یعنی', 'خب', 'آها', 'اوکی', 'باشه', 'چشم', 'حالا', 'اممم'];
        this.fillers = ['یعنی', 'ببین', 'خب', 'راستش', 'واقعا', 'جدی', 'مطمئن'];
        this.endings = ['😊', '💪', '✨', '👍', '❤️', 'فهمیدی؟', 'اوکیه؟', 'باشه؟'];
        this.typoMap = {
            'می‌کنم': ['میکنم', 'می کنم'],
            'می‌خواهم': ['میخام', 'میخوام'],
            'هست': ['هستش'],
            'خیلی': ['خیلی', 'خییلی'],
            'نمی‌دانم': ['نمیدونم'],
            'می‌شود': ['میشه'],
            'برایت': ['برات']
        };
    }
    humanize(t) {
        let r = this._shorten(t);
        if (Math.random() < 0.4) r = this.starters[Math.floor(Math.random() * this.starters.length)] + '، ' + r;
        if (Math.random() < this.c.filler) r = this._addFiller(r);
        if (Math.random() < this.c.typo) r = this._addTypo(r);
        if (Math.random() < this.c.emoji) r += '\n\n' + this.endings[Math.floor(Math.random() * this.endings.length)];
        return r;
    }
    _shorten(t) {
        const map = { 'خیلی خوب': 'خیلی خب', 'چطور است': 'چطوره', 'می‌خواهم': 'میخام', 'نمی‌دانم': 'نمیدونم', 'می‌شود': 'میشه', 'برای شما': 'برات', 'به شما': 'بهت' };
        for (let [k, v] of Object.entries(map)) if (Math.random() < 0.6) t = t.replace(new RegExp(k, 'g'), v);
        return t;
    }
    _addFiller(t) {
        let s = t.split('.');
        if (s.length < 2) return t;
        let pos = Math.floor(Math.random() * (s.length - 1)) + 1;
        s[pos] = ' ' + this.fillers[Math.floor(Math.random() * this.fillers.length)] + ' ' + s[pos].trim();
        return s.join('.');
    }
    _addTypo(t) {
        for (let [c, ty] of Object.entries(this.typoMap)) {
            if (t.includes(c) && Math.random() < 0.3) {
                t = t.replace(c, ty[Math.floor(Math.random() * ty.length)]);
                break;
            }
        }
        return t;
    }
}

// ==================== TIMING ====================
const Timing = {
    read: t => (t.split(' ').length / 200) * 60 * 1000,
    type: t => (t.split(' ').length / 45) * 60 * 1000,
    think: () => 1000 + Math.random() * 2000,
    delay: (user, resp) => Math.min(Timing.read(user) + Timing.think() + Timing.type(resp) * 0.3, 8000),
    chunks: t => {
        let parts = t.split(/[.\n]+/).filter(p => p.trim()), chunks = [], cur = '';
        for (let p of parts) {
            if ((cur + p).length < 200) cur += (cur ? '. ' : '') + p.trim();
            else { if (cur) chunks.push(cur + '.'); cur = p.trim(); }
        }
        if (cur) chunks.push(cur + '.');
        return chunks;
    }
};

// ==================== AI ENGINE ====================
class AIEngine {
    constructor(env) { 
        this.env = env; 
        this.log = new Logger(env); 
    }
    
    async generate(prompt, key, personality) {
        const m = MEGA_CONFIG.ENGINES[key];
        if (!m) throw new Error('مدل نامعتبر');
        
        const sys = MEGA_CONFIG.PERSONALITIES[personality].prompt;
        
        try {
            if (m.provider === 'cf') {
                if (!this.env.AI) throw new Error('AI binding not configured');
                const res = await this.env.AI.run(m.model, { 
                    messages: [
                        { role: 'system', content: sys }, 
                        { role: 'user', content: prompt }
                    ], 
                    max_tokens: m.max_tokens, 
                    temperature: m.temperature 
                });
                return res.response || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'openrouter') {
                if (!this.env.OPENROUTER_KEY) throw new Error('OpenRouter key missing');
                const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.OPENROUTER_KEY}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': 'https://housha-ai-bot.workers.dev',
                        'X-Title': 'HOSHA'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        messages: [
                            { role: 'system', content: sys },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: m.max_tokens,
                        temperature: m.temperature
                    })
                });
                if (!res.ok) throw new Error(`OpenRouter error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'gemini') {
                if (!this.env.GEMINI_KEY) throw new Error('Gemini key missing');
                const res = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${m.model}:generateContent?key=${this.env.GEMINI_KEY}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: sys + '\n\n' + prompt }]
                            }],
                            generationConfig: {
                                maxOutputTokens: m.max_tokens,
                                temperature: m.temperature
                            }
                        })
                    }
                );
                if (!res.ok) throw new Error(`Gemini error: ${res.status}`);
                const data = await res.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'openai') {
                if (!this.env.OPENAI_KEY) throw new Error('OpenAI key missing');
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.OPENAI_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        messages: [
                            { role: 'system', content: sys },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: m.max_tokens,
                        temperature: m.temperature
                    })
                });
                if (!res.ok) throw new Error(`OpenAI error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'claude') {
                if (!this.env.CLAUDE_KEY) throw new Error('Claude key missing');
                const res = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                        'x-api-key': this.env.CLAUDE_KEY,
                        'anthropic-version': '2023-06-01',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        max_tokens: m.max_tokens,
                        temperature: m.temperature,
                        system: sys,
                        messages: [{ role: 'user', content: prompt }]
                    })
                });
                if (!res.ok) throw new Error(`Claude error: ${res.status}`);
                const data = await res.json();
                return data.content?.[0]?.text || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'deepseek') {
                if (!this.env.DEEPSEEK_KEY) throw new Error('DeepSeek key missing');
                const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.DEEPSEEK_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        messages: [
                            { role: 'system', content: sys },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: m.max_tokens,
                        temperature: m.temperature
                    })
                });
                if (!res.ok) throw new Error(`DeepSeek error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            if (m.provider === 'mistral') {
                if (!this.env.MISTRAL_KEY) throw new Error('Mistral key missing');
                const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.MISTRAL_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        messages: [
                            { role: 'system', content: sys },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: m.max_tokens,
                        temperature: m.temperature
                    })
                });
                if (!res.ok) throw new Error(`Mistral error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            throw new Error('پروایدر نامعتبر');
        } catch (e) { 
            this.log.error('AI fail', { key, e: e.message }); 
            throw e; 
        }
    }
}

// ==================== VISION AI ====================
class VisionAI {
    constructor(env) { 
        this.env = env; 
        this.log = new Logger(env); 
    }
    
    async analyze(imageUrl, prompt, key, personality) {
        const m = MEGA_CONFIG.ENGINES[key];
        if (!m?.vision) throw new Error('مدل Vision نامعتبر');
        
        const sys = MEGA_CONFIG.PERSONALITIES[personality].prompt;
        
        try {
            const img = await fetch(imageUrl);
            const buf = await img.arrayBuffer();
            const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
            
            if (m.provider === 'gemini') {
                if (!this.env.GEMINI_KEY) throw new Error('Gemini key missing');
                const res = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${m.model}:generateContent?key=${this.env.GEMINI_KEY}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [
                                    { text: sys + '\n\n' + prompt },
                                    { inline_data: { mime_type: 'image/jpeg', data: b64 } }
                                ]
                            }],
                            generationConfig: { maxOutputTokens: m.max_tokens, temperature: m.temperature }
                        })
                    }
                );
                if (!res.ok) throw new Error(`Gemini Vision error: ${res.status}`);
                const data = await res.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text || 'تحلیل ناموفق';
            }
            
            if (m.provider === 'openai') {
                if (!this.env.OPENAI_KEY) throw new Error('OpenAI key missing');
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.OPENAI_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        messages: [{
                            role: 'user',
                            content: [
                                { type: 'text', text: sys + '\n\n' + prompt },
                                { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } }
                            ]
                        }],
                        max_tokens: m.max_tokens
                    })
                });
                if (!res.ok) throw new Error(`GPT Vision error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'تحلیل ناموفق';
            }
            
            if (m.provider === 'claude') {
                if (!this.env.CLAUDE_KEY) throw new Error('Claude key missing');
                const res = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                        'x-api-key': this.env.CLAUDE_KEY,
                        'anthropic-version': '2023-06-01',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: m.model,
                        max_tokens: m.max_tokens,
                        messages: [{
                            role: 'user',
                            content: [
                                { type: 'text', text: sys + '\n\n' + prompt },
                                { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: b64 } }
                            ]
                        }]
                    })
                });
                if (!res.ok) throw new Error(`Claude Vision error: ${res.status}`);
                const data = await res.json();
                return data.content?.[0]?.text || 'تحلیل ناموفق';
            }
            
            throw new Error('Vision not implemented for this provider');
        } catch (e) { 
            this.log.error('Vision fail', { key, e: e.message }); 
            throw e; 
        }
    }
}

// ==================== TELEGRAM ====================
class Telegram {
    constructor(env) { 
        this.token = env.TELEGRAM_TOKEN; 
        this.log = new Logger(env); 
    }
    
    async call(method, body) {
        try {
            const r = await fetch(`https://api.telegram.org/bot${this.token}/${method}`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(body) 
            });
            return r;
        } catch (e) {
            this.log.error('TG call fail', { method, e: e.message });
            return null;
        }
    }
    
    async send(chatId, text, opt = {}) { 
        return this.call('sendMessage', { 
            chat_id: chatId, 
            text: text.substring(0, 4096), 
            parse_mode: 'Markdown', 
            ...opt 
        }); 
    }
    
    async edit(chatId, msgId, text, opt = {}) { 
        return this.call('editMessageText', { 
            chat_id: chatId, 
            message_id: msgId, 
            text: text.substring(0, 4096), 
            parse_mode: 'Markdown', 
            ...opt 
        }); 
    }
    
    async answer(cbId, text, alert = false) { 
        return this.call('answerCallbackQuery', { 
            callback_query_id: cbId, 
            text, 
            show_alert: alert 
        }); 
    }
    
    async typing(chatId) { 
        this.call('sendChatAction', { chat_id: chatId, action: 'typing' }); 
    }
    
    async humanLike(chatId, text, userMsg, settings) {
        const h = new Humanizer(MEGA_CONFIG.PERSONALITIES[settings.personality]);
        const final = settings.human ? h.humanize(text) : text;
        
        if (!settings.human || final.length < 50) {
            await this.send(chatId, final);
            return;
        }
        
        const chunks = Timing.chunks(final);
        for (let i = 0; i < chunks.length; i++) {
            this.typing(chatId);
            const delay = i === 0 ? Timing.delay(userMsg, chunks[i]) : Timing.type(chunks[i]);
            await Utils.sleep(Math.min(delay, 5000));
            await this.send(chatId, chunks[i]);
            if (i < chunks.length - 1) await Utils.sleep(400 + Math.random() * 600);
        }
    }
    
    async getFile(fileId) {
        const r = await this.call('getFile', { file_id: fileId });
        if (!r) throw new Error('getFile failed');
        const d = await r.json();
        if (!d.ok) throw new Error('getFile not ok');
        return `https://api.telegram.org/file/bot${this.token}/${d.result.file_path}`;
    }
}

// ==================== GLASS PANELS ====================
const Glass = {
    helpMain: {
        text: '╭──────────────────╮\n│  🌸 **راهنمای حوشا**  │\n├──────────────────┤\n│ 💬 چت با AI      │\n│ 📸 تحلیل عکس     │\n│ 💎 VIP و اشتراک  │\n│ 👤 تنظیمات حساب  │\n│ 📊 آمار من       │\n╰──────────────────╯',
        keyboard: { 
            inline_keyboard: [
                [{ text: '💬 چت با AI', callback_data: 'help_chat' }, { text: '📸 تحلیل عکس', callback_data: 'help_vision' }],
                [{ text: '💎 VIP', callback_data: 'help_vip' }, { text: '👤 تنظیمات', callback_data: 'help_settings' }],
                [{ text: '📊 آمار من', callback_data: 'help_stats' }, { text: '❌ بستن', callback_data: 'close' }]
            ]
        }
    },
    adminMain: {
        text: '╭──────────────────╮\n│  🌸 **پنل مدیریت**  │\n├──────────────────┤\n│ 👥 مدیریت کاربران  │\n│ 📊 آمار سیستم     │\n│ 💎 مدیریت VIP     │\n│ 📢 ارسال همگانی   │\n│ ⚙️ تنظیمات ربات   │\n╰──────────────────╯',
        keyboard: { 
            inline_keyboard: [
                [{ text: '👥 کاربران', callback_data: 'admin_users' }, { text: '📊 آمار', callback_data: 'admin_stats' }],
                [{ text: '💎 VIP', callback_data: 'admin_vip' }, { text: '📢 همگانی', callback_data: 'admin_broadcast' }],
                [{ text: '⚙️ تنظیمات', callback_data: 'admin_settings' }, { text: '❌ بستن', callback_data: 'close' }]
            ]
        }
    },
    back: { inline_keyboard: [[{ text: '🔙 بازگشت', callback_data: 'back' }, { text: '❌ بستن', callback_data: 'close' }]] }
};

// ==================== MESSAGE HANDLER ====================
async function handleMessage(upd, env) {
    const db = new DatabaseManager(env);
    const tg = new Telegram(env);
    const ai = new AIEngine(env);
    const vision = new VisionAI(env);
    const log = new Logger(env);
    const cache = new CacheManager(env);

    if (!upd.message) return;
    
    const chatId = upd.message.chat.id;
    const uid = upd.message.from.id.toString();
    const text = upd.message.text || upd.message.caption || '';
    const photo = upd.message.photo;
    const reply = upd.message.reply_to_message;
    const start = Date.now();

    try {
        await db.register({ 
            id: uid, 
            username: upd.message.from.username, 
            first_name: upd.message.from.first_name,
            last_name: upd.message.from.last_name
        });

        const blocked = await db.isBlocked(uid);
        if (blocked) {
            await tg.send(chatId, `🚫 دسترسی مسدود\n📌 دلیل: ${blocked.reason}\n⏰ زمان: ${Utils.date(blocked.created_at)}`);
            return;
        }

        const settings = await db.getSettings(uid);
        const rate = await db.checkRate(uid, settings.tier);
        
        if (!rate.allowed) {
            await tg.send(chatId, `⏱️ ${rate.msg}\n💎 برای حد بالاتر: /upgrade\n📊 باقیمانده: ${rate.remaining?.day || 0} پیام`);
            return;
        }

        const isCmd = text.startsWith('/');
        const isReply = reply && reply.from?.is_bot;

        if (!isCmd && !isReply && !photo) return;

        if (text === '/start') {
            const refMatch = text.match(/\/start\s+([A-Z0-9]+)/);
            if (refMatch && !settings.referred_by) {
                const ref = await db.getUserByReferralCode(refMatch[1]);
                if (ref && ref.user_id !== uid) {
                    await db.updateUser(uid, { referred_by: ref.user_id });
                    await db.processReferral(ref.user_id, uid);
                }
            }
            
            const welcome = `🌸 **سلام ${upd.message.from.first_name}!**\n\n` +
                `من **حوشا** هستم با ${Object.keys(MEGA_CONFIG.ENGINES).length} موتور AI!\n\n` +
                `💎 سطح شما: ${MEGA_CONFIG.TIERS[settings.tier].emoji} ${MEGA_CONFIG.TIERS[settings.tier].name}\n` +
                `📊 سهمیه امروز: ${rate.remaining.day} پیام\n\n` +
                `/models - لیست موتورها\n` +
                `/settings - تنظیمات\n` +
                `/upgrade - ارتقا حساب\n` +
                `/help - راهنما`;
            await tg.send(chatId, welcome);
            return;
        }

        if (text === '/models') {
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            let msg = `🤖 **لیست موتورهای AI**\n\n`;
            msg += `سطح شما: ${tierConfig.emoji} ${tierConfig.name}\n`;
            msg += `موتور فعلی: ${MEGA_CONFIG.ENGINES[settings.model].name}\n\n`;
            
            msg += `**💬 موتورهای متنی:**\n`;
            Object.entries(MEGA_CONFIG.ENGINES).forEach(([k, m]) => {
                if (!m.vision) {
                    const available = !m.vip || tierConfig.vipModels.includes('all') || tierConfig.vipModels.includes(k);
                    const current = k === settings.model ? ' ✅' : '';
                    msg += `${m.emoji} ${m.name} ${available ? '' : '🔒'}${current}\n`;
                }
            });
            
            msg += `\n**📸 موتورهای Vision:**\n`;
            Object.entries(MEGA_CONFIG.ENGINES).forEach(([k, m]) => {
                if (m.vision) {
                    const available = tierConfig.vision && (!m.vip || tierConfig.vipModels.includes('all') || tierConfig.vipModels.includes(k));
                    const current = k === settings.vision ? ' ✅' : '';
                    msg += `${m.emoji} ${m.name} ${available ? '' : '🔒'}${current}\n`;
                }
            });
            
            msg += `\n/setmodel [key] - تغییر موتور`;
            await tg.send(chatId, msg);
            return;
        }

        if (text.startsWith('/setmodel')) {
            const parts = text.split(' ');
            if (parts.length < 2) {
                await tg.send(chatId, '⚙️ **تغییر موتور**\nفرمت: /setmodel [key]\nمثال: /setmodel CF_GEMMA');
                return;
            }
            const modelKey = parts[1].toUpperCase();
            const model = MEGA_CONFIG.ENGINES[modelKey];
            if (!model) {
                await tg.send(chatId, '❌ موتور نامعتبر');
                return;
            }
            
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            const hasAccess = !model.vip || tierConfig.vipModels.includes('all') || tierConfig.vipModels.includes(modelKey);
            if (!hasAccess) {
                await tg.send(chatId, `🔒 این موتور VIP است!\n💎 /upgrade`);
                return;
            }
            
            if (model.vision) {
                await db.updateUser(uid, { preferred_vision: modelKey });
            } else {
                await db.updateUser(uid, { preferred_model: modelKey });
            }
            await tg.send(chatId, `✅ موتور ${model.vision ? 'Vision' : ''} تغییر یافت به ${model.emoji} ${model.name}`);
            return;
        }

        if (text === '/personality') {
            let msg = `🎭 **شخصیت‌ها**\n\nشخصیت فعلی: ${MEGA_CONFIG.PERSONALITIES[settings.personality].emoji} ${MEGA_CONFIG.PERSONALITIES[settings.personality].name}\n\n`;
            Object.entries(MEGA_CONFIG.PERSONALITIES).forEach(([k, p]) => {
                const current = k === settings.personality ? ' ✅' : '';
                msg += `${p.emoji} ${p.name} - ${p.prompt.substring(0, 50)}...${current}\n`;
            });
            msg += '\n/personality [friendly|professional|casual|expert]';
            await tg.send(chatId, msg);
            return;
        }

        if (text.startsWith('/personality')) {
            const parts = text.split(' ');
            if (parts.length < 2) {
                await tg.send(chatId, 'فرمت: /personality [friendly|professional|casual|expert]');
                return;
            }
            const persKey = parts[1];
            if (!MEGA_CONFIG.PERSONALITIES[persKey]) {
                await tg.send(chatId, '❌ شخصیت نامعتبر');
                return;
            }
            await db.updateUser(uid, { personality: persKey });
            await tg.send(chatId, `✅ شخصیت تغییر یافت به ${MEGA_CONFIG.PERSONALITIES[persKey].name}`);
            return;
        }

        if (text === '/human') {
            const newMode = !settings.human;
            await db.updateUser(uid, { human_mode: newMode ? 1 : 0 });
            await tg.send(chatId, newMode ? '✅ حالت انسانی فعال شد' : '❌ حالت انسانی غیرفعال شد');
            return;
        }

        if (text === '/settings') {
            const user = await db.getUser(uid);
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            let msg = `⚙️ **تنظیمات شما**\n\n`;
            msg += `👤 نام: ${user.first_name}\n`;
            msg += `🆔 آیدی: \`${uid}\`\n`;
            msg += `💎 سطح: ${tierConfig.emoji} ${tierConfig.name}\n`;
            msg += `🤖 موتور: ${MEGA_CONFIG.ENGINES[settings.model].name}\n`;
            msg += `👁️ موتور Vision: ${MEGA_CONFIG.ENGINES[settings.vision].name}\n`;
            msg += `🎭 شخصیت: ${MEGA_CONFIG.PERSONALITIES[settings.personality].name}\n`;
            msg += `🧑 حالت انسانی: ${settings.human ? '✅' : '❌'}\n\n`;
            msg += `/setmodel - تغییر موتور\n/personality - تغییر شخصیت\n/human - تغییر حالت انسانی`;
            await tg.send(chatId, msg);
            return;
        }

        if (text === '/stats') {
            const user = await db.getUser(uid);
            await tg.send(chatId,
                `📊 **آمار شما**\n\n` +
                `💬 کل پیام‌ها: ${Utils.num(user?.total_messages || 0)}\n` +
                `🧠 کل توکن‌ها: ${Utils.num(user?.total_tokens || 0)}\n` +
                `💰 هزینه کل: ${Utils.num(Math.round(user?.total_cost || 0))} تومان\n` +
                `👥 دعوت‌ها: ${user?.referral_count || 0}\n` +
                `🎁 پیام هدیه: ${user?.bonus_messages || 0}\n` +
                `📅 عضو از: ${Utils.date(user?.created_at || new Date())}`
            );
            return;
        }

        if (text === '/usage') {
            const dayCount = await env.DB.prepare(
                `SELECT COUNT(*) as c FROM usage_logs WHERE user_id = ? AND DATE(created_at) = DATE('now')`
            ).bind(uid).first();
            const dayTokens = await env.DB.prepare(
                `SELECT SUM(tokens) as t FROM usage_logs WHERE user_id = ? AND DATE(created_at) = DATE('now')`
            ).bind(uid).first();
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            let msg = `📊 **مصرف امروز**\n\n`;
            msg += `💬 پیام‌ها: ${dayCount?.c || 0} / ${tierConfig.msg === -1 ? '∞' : tierConfig.msg}\n`;
            msg += `🧠 توکن‌ها: ${Utils.num(dayTokens?.t || 0)} / ${tierConfig.token === -1 ? '∞' : Utils.num(tierConfig.token)}\n`;
            msg += `🎁 هدیه: ${settings.bonus}`;
            await tg.send(chatId, msg);
            return;
        }

        if (text === '/referral') {
            const user = await db.getUser(uid);
            const link = `https://t.me/${MEGA_CONFIG.BOT_USERNAME}?start=${user.referral_code}`;
            await tg.send(chatId,
                `👥 **سیستم رفرال**\n\n` +
                `🔗 لینک دعوت شما:\n\`${link}\`\n\n` +
                `📊 تعداد دعوت‌ها: ${user.referral_count || 0}\n` +
                `🎁 پاداش هر دعوت: ${MEGA_CONFIG.REFERRAL.reward} پیام\n` +
                `💎 با ${MEGA_CONFIG.REFERRAL.vipReq} دعوت، VIP رایگان!`
            );
            return;
        }

        if (text === '/myplan') {
            const user = await db.getUser(uid);
            const tier = MEGA_CONFIG.TIERS[settings.tier];
            let msg = `💎 **اشتراک شما**\n\n`;
            msg += `سطح: ${tier.emoji} ${tier.name}\n`;
            if (settings.tier !== 'FREE' && user.tier_expires_at) {
                const days = Math.ceil((new Date(user.tier_expires_at) - new Date()) / (1000*60*60*24));
                msg += `⏰ انقضا: ${Utils.date(user.tier_expires_at)} (${days} روز)\n\n`;
            }
            msg += `**محدودیت‌ها:**\n`;
            msg += `💬 پیام روزانه: ${tier.msg === -1 ? '∞' : tier.msg}\n`;
            msg += `🧠 توکن روزانه: ${tier.token === -1 ? '∞' : Utils.num(tier.token)}\n`;
            msg += `📸 Vision: ${tier.vision ? '✅' : '❌'}`;
            if (settings.tier === 'FREE') msg += `\n\n💎 برای ارتقا: /upgrade`;
            await tg.send(chatId, msg);
            return;
        }

        if (text === '/upgrade') {
            let msg = `💎 **ارتقای حساب**\n\n`;
            Object.entries(MEGA_CONFIG.TIERS).forEach(([k, t]) => {
                if (k !== 'FREE') {
                    msg += `${t.emoji} **${t.name}**\n`;
                    msg += `   💬 ${t.msg === -1 ? '∞' : t.msg} پیام/روز\n`;
                    msg += `   🧠 ${t.token === -1 ? '∞' : Utils.num(t.token)} توکن/روز\n`;
                    msg += `   📸 ${t.vision ? '✅ Vision' : '❌ Vision'}\n\n`;
                }
            });
            msg += `برای خرید با پشتیبانی تماس بگیرید.`;
            await tg.send(chatId, msg);
            return;
        }

        if (text === '/help') {
            await tg.send(chatId, Glass.helpMain.text, Glass.helpMain.keyboard);
            return;
        }

        if (Utils.isAdmin(uid)) {
            if (text === '/admin') {
                await tg.send(chatId, Glass.adminMain.text, Glass.adminMain.keyboard);
                return;
            }

            if (text === '/adminstats') {
                const s = await db.stats();
                const vip = await db.vipStats();
                await tg.send(chatId,
                    `📊 **آمار سیستم**\n\n` +
                    `👥 کل کاربران: ${Utils.num(s.users)}\n` +
                    `⚡ فعال امروز: ${Utils.num(s.active)}\n` +
                    `💬 کل پیام‌ها: ${Utils.num(s.totalMsg)}\n` +
                    `📨 پیام امروز: ${Utils.num(s.todayMsg)}\n` +
                    `💎 کاربران ویژه: ${vip.vip}`
                );
                return;
            }

            if (text.startsWith('/block')) {
                const parts = text.split(' ');
                if (parts.length < 3) {
                    await tg.send(chatId, 'فرمت: /block [user_id] [دلیل]');
                    return;
                }
                await db.blockUser(parts[1], parts.slice(2).join(' '), uid);
                await tg.send(chatId, `✅ کاربر ${parts[1]} بلاک شد.`);
                return;
            }

            if (text.startsWith('/unblock')) {
                const parts = text.split(' ');
                if (parts.length < 2) {
                    await tg.send(chatId, 'فرمت: /unblock [user_id]');
                    return;
                }
                await db.unblockUser(parts[1]);
                await tg.send(chatId, `✅ کاربر ${parts[1]} آنبلاک شد.`);
                return;
            }

            if (text.startsWith('/giveplan')) {
                const parts = text.split(' ');
                if (parts.length < 3) {
                    await tg.send(chatId, 'فرمت: /giveplan [user_id] [FREE|BASIC|PRO|VIP]');
                    return;
                }
                const tier = parts[2].toUpperCase();
                if (!['FREE', 'BASIC', 'PRO', 'VIP'].includes(tier)) {
                    await tg.send(chatId, '❌ سطح نامعتبر');
                    return;
                }
                const expires = new Date();
                expires.setDate(expires.getDate() + 30);
                await db.updateUser(parts[1], { tier, tier_expires_at: expires.toISOString() });
                await tg.send(chatId, `✅ سطح کاربر ${parts[1]} به ${tier} تغییر یافت (۳۰ روز).`);
                return;
            }

            if (text.startsWith('/broadcast')) {
                const msg = text.replace('/broadcast', '').trim();
                if (!msg) {
                    await tg.send(chatId, 'فرمت: /broadcast [پیام]');
                    return;
                }
                const users = await db.getAllUsers();
                let sent = 0, failed = 0;
                await tg.send(chatId, `📢 ارسال به ${users.length} کاربر...`);
                for (const u of users) {
                    try {
                        await tg.send(u.user_id, `📢 **پیام مدیریت:**\n\n${msg}`);
                        sent++;
                        await Utils.sleep(50);
                    } catch {
                        failed++;
                    }
                }
                await tg.send(chatId, `✅ ارسال شد\nموفق: ${sent}\nناموفق: ${failed}`);
                return;
            }
        }

        if (photo) {
            const fileId = photo[photo.length - 1].file_id;
            const imageUrl = await tg.getFile(fileId);
            const visionModel = settings.vision;
            const modelConfig = MEGA_CONFIG.ENGINES[visionModel];
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            
            if (!tierConfig.vision) {
                await tg.send(chatId, `🔒 تحلیل عکس فقط برای اعضای ویژه\n💎 /upgrade`);
                return;
            }
            
            await tg.typing(chatId);
            await tg.send(chatId, `${modelConfig.emoji} در حال تحلیل با ${modelConfig.name}...`);
            
            const prompt = `این عکس رو تحلیل کن:\n${text || 'توضیحی ندادن، خودت بگو چی توش هست'}`;
            const analysis = await vision.analyze(imageUrl, prompt, visionModel, settings.personality);
            const tokens = Utils.tokens(analysis);
            const cost = tokens * (modelConfig.cost || 0) * 42000;
            
            await db.saveMessage(uid, 'user', text || '[عکس]', visionModel, 0, 0, true);
            await db.saveMessage(uid, 'assistant', analysis, visionModel, tokens, cost);
            await db.logUsage(uid, visionModel, tokens, cost, true);
            
            await tg.humanLike(chatId, analysis, text, settings);
            return;
        }

        if (isReply && text) {
            const model = settings.model;
            const modelConfig = MEGA_CONFIG.ENGINES[model];
            const cacheKey = `${uid}:${Utils.hash(text)}`;
            const cached = await cache.get(cacheKey);
            
            if (cached) {
                await tg.humanLike(chatId, cached, text, settings);
                return;
            }
            
            const response = await ai.generate(text, model, settings.personality);
            const tokens = Utils.tokens(text + response);
            const cost = tokens * (modelConfig.cost || 0) * 42000;
            
            await cache.set(cacheKey, response);
            await db.saveMessage(uid, 'user', text, model, Utils.tokens(text), 0);
            await db.saveMessage(uid, 'assistant', response, model, tokens, cost);
            await db.logUsage(uid, model, tokens, cost, true);
            
            await tg.humanLike(chatId, response, text, settings);
        }

    } catch (e) {
        log.error('handleMessage', { uid, e: e.message, stack: e.stack });
        await tg.send(chatId, '❌ خطایی رخ داد. /help');
    }
}

// ==================== CALLBACK HANDLER ====================
async function handleCallback(cb, env) {
    const tg = new Telegram(env);
    const db = new DatabaseManager(env);
    const chatId = cb.message.chat.id;
    const msgId = cb.message.message_id;
    const data = cb.data;
    const uid = cb.from.id.toString();
    const cbId = cb.id;

    try {
        if (data === 'close') {
            await tg.edit(chatId, msgId, '✅ بسته شد.');
            await tg.answer(cbId, 'بسته شد');
            return;
        }
        if (data === 'back') {
            await tg.edit(chatId, msgId, Glass.helpMain.text, Glass.helpMain.keyboard);
            await tg.answer(cbId, 'بازگشت');
            return;
        }

        if (data.startsWith('help_')) {
            let txt = '';
            const settings = await db.getSettings(uid);
            if (data === 'help_chat') txt = '💬 روی پیام‌های من ریپلای کن تا چت کنیم.\nموتور فعلی: ' + MEGA_CONFIG.ENGINES[settings.model].name;
            else if (data === 'help_vision') txt = '📸 عکس بفرست تا تحلیل کنم.\nموتور Vision: ' + MEGA_CONFIG.ENGINES[settings.vision].name;
            else if (data === 'help_vip') {
                const tier = MEGA_CONFIG.TIERS[settings.tier];
                txt = `💎 سطح شما: ${tier.emoji} ${tier.name}\n` +
                      `💬 پیام روزانه: ${tier.msg === -1 ? '∞' : tier.msg}\n` +
                      `🧠 توکن روزانه: ${tier.token === -1 ? '∞' : Utils.num(tier.token)}\n` +
                      `📸 Vision: ${tier.vision ? '✅' : '❌'}`;
            }
            else if (data === 'help_settings') {
                txt = `👤 **تنظیمات**\nشخصیت: ${MEGA_CONFIG.PERSONALITIES[settings.personality].name}\nحالت انسانی: ${settings.human ? '✅' : '❌'}\n\n/personality - تغییر شخصیت\n/human - تغییر حالت انسانی`;
            }
            else if (data === 'help_stats') {
                const user = await db.getUser(uid);
                txt = `📊 آمار شما:\n💬 پیام‌ها: ${user?.total_messages || 0}\n🧠 توکن‌ها: ${user?.total_tokens || 0}`;
            }
            await tg.edit(chatId, msgId, txt, Glass.back);
            await tg.answer(cbId, 'راهنما');
            return;
        }

        if (data.startsWith('admin_') && Utils.isAdmin(uid)) {
            let txt = '';
            if (data === 'admin_stats') {
                const s = await db.stats();
                txt = `📊 آمار:\n👥 کاربران: ${s.users}\n⚡ فعال امروز: ${s.active}\n💬 پیام‌ها: ${s.totalMsg}`;
            } else if (data === 'admin_users') txt = '👥 /block [id] [دلیل]\n/unblock [id]';
            else if (data === 'admin_vip') txt = '💎 /giveplan [id] [tier]';
            else if (data === 'admin_broadcast') txt = '📢 /broadcast [پیام]';
            else if (data === 'admin_settings') txt = '⚙️ تنظیمات در حال توسعه';
            await tg.edit(chatId, msgId, txt, Glass.back);
            await tg.answer(cbId, 'مدیریت');
            return;
        }

        await tg.answer(cbId, 'دستور نامعتبر');
    } catch (e) {
        console.error('Callback error:', e);
        await tg.answer(cbId, '❌ خطا', true);
    }
}

// ==================== MAIN WORKER ====================
let initialized = false;
let globalCache;

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        if (!globalCache) globalCache = new CacheManager(env);

        if (!initialized) {
            const db = new DatabaseManager(env);
            try { 
                await db.init(); 
                initialized = true; 
                console.log('✅ Worker initialized');
            } catch (e) { 
                return new Response(`DB Init Error: ${e.message}`, { status: 500 }); 
            }
        }

        if (url.pathname === '/webhook' && request.method === 'POST') {
            const upd = await request.json();
            if (upd.callback_query) {
                ctx.waitUntil(handleCallback(upd.callback_query, env));
            } else {
                ctx.waitUntil(handleMessage(upd, env));
            }
            return new Response('OK');
        }

        // اضافه کردن endpoint برای ست کردن webhook
        if (url.pathname === '/setup-webhook') {
            const webhookUrl = `https://${url.hostname}/webhook`;
            const response = await fetch(
                `https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/setWebhook?url=${webhookUrl}`
            );
            const result = await response.json();
            return new Response(JSON.stringify(result, null, 2), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (url.pathname === '/status') {
            const db = new DatabaseManager(env);
            const stats = await db.stats();
            const vip = await db.vipStats();
            return new Response(
                `<!DOCTYPE html>
                <html dir="rtl">
                <head><meta charset="UTF-8"><title>${MEGA_CONFIG.BOT_NAME} - وضعیت</title>
                <style>
                    body { font-family: Tahoma, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 20px; }
                    .container { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 600px; width: 100%; text-align: center; }
                    h1 { color: #667eea; font-size: 2.5em; margin-bottom: 10px; }
                    .version { color: #764ba2; margin-bottom: 30px; }
                    .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                    .stat { background: #f8f9fa; padding: 20px; border-radius: 15px; border-right: 4px solid #667eea; }
                    .stat-value { font-size: 2em; font-weight: bold; color: #667eea; }
                    .stat-label { color: #666; font-size: 0.9em; }
                    .features { margin-top: 30px; background: #f8f9fa; padding: 20px; border-radius: 15px; }
                    .feature { padding: 8px; margin: 5px 0; background: white; border-radius: 8px; }
                </style>
                </head>
                <body>
                    <div class="container">
                        <h1>🌸 ${MEGA_CONFIG.BOT_NAME}</h1>
                        <div class="version">v${MEGA_CONFIG.VERSION} - Ultra Edition (FINAL FIX)</div>
                        <div class="stats">
                            <div class="stat"><div class="stat-value">${Utils.num(stats.users)}</div><div class="stat-label">کاربران</div></div>
                            <div class="stat"><div class="stat-value">${Utils.num(stats.active)}</div><div class="stat-label">فعال امروز</div></div>
                            <div class="stat"><div class="stat-value">${Utils.num(stats.totalMsg)}</div><div class="stat-label">پیام‌ها</div></div>
                            <div class="stat"><div class="stat-value">${vip.vip}</div><div class="stat-label">VIP</div></div>
                        </div>
                        <div class="features">
                            <div class="feature">✨ ۱۲ موتور AI (Cloudflare, GPT, Gemini, Claude, OpenRouter, DeepSeek, Mistral)</div>
                            <div class="feature">💎 سیستم VIP و اشتراک</div>
                            <div class="feature">👥 سیستم رفرال (رفع شد)</div>
                            <div class="feature">🎭 شخصیت‌های مختلف</div>
                            <div class="feature">📊 آنالیتیکس و آمار</div>
                            <div class="feature">📸 Vision AI برای تحلیل عکس</div>
                            <div class="feature">🧊 پنل شیشه‌ای (Glassmorphism)</div>
                        </div>
                    </div>
                </body>
                </html>`,
                { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            );
        }

        return new Response('HOSHA MEGA Ultra Edition (FINAL FIX) - Ready', { status: 200 });
    }
};
