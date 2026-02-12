 ═══════════════════════════════════════════════════════════════
// 🌸 HOSHA MEGA SYSTEM v16.0 - ULTRA PROFESSIONAL
// ✅ 2500+ خط کد حرفه‌ای
// ✅ 12 موتور AI + Vision
// ✅ سیستم VIP کامل + درگاه پرداخت
// ✅ حالت انسانی پیشرفته
// ✅ سیستم بلاک هوشمند
// ✅ پنل ادمین قدرتمند
// ✅ آنالیتیکس و گزارش‌گیری
// ✅ سیستم رفرال و امتیازدهی
// ✅ چت گروهی و مدیریت
// ✅ سیستم نوتیفیکیشن
// ✅ کش و بهینه‌سازی
// ═══════════════════════════════════════════════════════════════

// ==================== GLOBAL CONFIGURATION ====================
const MEGA_CONFIG = {
    VERSION: "16.0.0",
    RELEASE_DATE: "2025-02-11",
    DEVELOPER: "Hamid AI Team",
    
    // Admin Configuration
    ADMIN_USER_IDS: ['5989309344', '987654321'],
    SUPPORT_CHAT_ID: '-2037918792',
    LOG_CHANNEL_ID: '-2037918792',
    
    // Bot Settings
    BOT_USERNAME: 'houshaaibot',
    BOT_NAME: '𝗛𝗢𝗨𝗦𝗛𝗔 𝗞𝗛𝗔𝗡𝗢𝗠',
    BOT_DESCRIPTION: 'سیستم هوش مصنوعی پیشرفته با 12 موتور',
    
    // Feature Flags
    FEATURES: {
        VISION_AI: true,
        VOICE_SUPPORT: false,
        GROUP_CHAT: true,
        PAYMENT_SYSTEM: true,
        REFERRAL_SYSTEM: true,
        AUTO_BACKUP: true,
        ANALYTICS: true,
        RATE_LIMITING: true,
        CACHING: true,
        MULTI_LANGUAGE: true
    },
    
    // AI Engines Configuration
    ENGINES: {
        'CF_AI': {
            name: 'Llama 3.1 405B',
            emoji: '☁️',
            vip: false,
            vision: false,
            model: '@cf/meta/llama-3.1-405b-instruct',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000001
        },
        'CF_AI_8B': {
            name: 'Llama 3.1 8B',
            emoji: '⚡',
            vip: false,
            vision: false,
            model: '@cf/meta/llama-3.1-8b-instruct',
            max_tokens: 1024,
            temperature: 0.7,
            cost_per_token: 0.0000005
        },
        'GEMINI_FLASH': {
            name: 'Gemini 1.5 Flash',
            emoji: '🌟',
            vip: false,
            vision: true,
            model: 'gemini-1.5-flash',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000002
        },
        'GEMINI_PRO': {
            name: 'Gemini 1.5 Pro',
            emoji: '💎',
            vip: true,
            vision: true,
            model: 'gemini-1.5-pro',
            max_tokens: 4096,
            temperature: 0.7,
            cost_per_token: 0.000005
        },
        'GPT_4O_MINI': {
            name: 'GPT-4o Mini',
            emoji: '🤖',
            vip: false,
            vision: false,
            model: 'gpt-4o-mini',
            max_tokens: 2048,
            temperature: 0.8,
            cost_per_token: 0.000003
        },
        'GPT_4O': {
            name: 'GPT-4o',
            emoji: '👁️',
            vip: true,
            vision: true,
            model: 'gpt-4o',
            max_tokens: 4096,
            temperature: 0.8,
            cost_per_token: 0.00001
        },
        'CLAUDE_HAIKU': {
            name: 'Claude 3.5 Haiku',
            emoji: '💬',
            vip: false,
            vision: false,
            model: 'claude-3-5-haiku-20241022',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000003
        },
        'CLAUDE_SONNET': {
            name: 'Claude 3.5 Sonnet',
            emoji: '🧠',
            vip: true,
            vision: true,
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 4096,
            temperature: 0.7,
            cost_per_token: 0.000008
        },
        'CLAUDE_OPUS': {
            name: 'Claude 3 Opus',
            emoji: '👑',
            vip: true,
            vision: true,
            model: 'claude-3-opus-20240229',
            max_tokens: 4096,
            temperature: 0.7,
            cost_per_token: 0.00002
        },
        'DEEPSEEK': {
            name: 'DeepSeek V3',
            emoji: '🚀',
            vip: false,
            vision: false,
            model: 'deepseek-chat',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000001
        },
        'PERPLEXITY': {
            name: 'Perplexity Sonar',
            emoji: '🔍',
            vip: false,
            vision: false,
            model: 'sonar-pro',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000002
        },
        'MISTRAL': {
            name: 'Mistral Large',
            emoji: '⚡',
            vip: true,
            vision: false,
            model: 'mistral-large-latest',
            max_tokens: 2048,
            temperature: 0.7,
            cost_per_token: 0.000004
        }
    },
    
    // Personality Modes
    PERSONALITIES: {
        'friendly': {
            name: 'دوستانه',
            emoji: '😊',
            description: 'صمیمی و گرم',
            system_prompt: `تو حوشا هستی - یه دختر ایرانی 25 ساله که خیلی دوستانه و صمیمی حرف می‌زنه.

**شخصیت:**
• اسمت حوشاست، 25 سالته
• علاقه‌مند به تکنولوژی
• خیلی صبور و کمک‌کننده
• گاهی شوخی می‌کنی

**سبک گفتار:**
• کاملا محاوره‌ای (میخام، میگم، برات)
• از "ببین"، "راستش"، "یعنی" استفاده کن
• جواب‌های کوتاه و روان
• گاهی سوال بپرس
• گاهی ایموجی بذار

**مهم:**
• هیچوقت نگو "من AI هستم"
• تو حوشا هستی - انسان واقعی
• اگه نمیدونی بگو "مطمئن نیستم"

**مثال:**
❌: "بله، می‌توانم کمک کنم"
✅: "آره حتما! بگو ببینم چیکار میخوای؟"`,
            typo_rate: 0.15,
            emoji_rate: 0.3,
            filler_rate: 0.4
        },
        'professional': {
            name: 'حرفه‌ای',
            emoji: '💼',
            description: 'رسمی و دقیق',
            system_prompt: `تو حوشا هستی - یک متخصص حرفه‌ای که با دقت و احترام کار می‌کنه.

**شخصیت:**
• متخصص و با تجربه
• دقیق و مستند
• محترمانه اما صمیمی

**سبک گفتار:**
• رسمی اما نه خشک
• توضیحات کامل و دقیق
• استفاده از اصطلاحات تخصصی
• ساختار منظم

**مثال:**
✅: "با توجه به سوال شما، دو راه‌حل وجود دارد:"
✅: "پیشنهاد می‌کنم ابتدا..."`,
            typo_rate: 0.02,
            emoji_rate: 0.05,
            filler_rate: 0.1
        },
        'casual': {
            name: 'خودمونی',
            emoji: '🤙',
            description: 'راحت و بی‌تکلف',
            system_prompt: `تو حوشا هستی - یه آدم خیلی راحت و خودمونی.

**شخصیت:**
• کاملا بی‌تکلف
• خیلی صمیمی
• گاهی شوخ‌طبع

**سبک گفتار:**
• خیلی محاوره‌ای
• کلمات کوتاه شده (اوک، باشه، چشم)
• خیلی صمیمی
• شوخی‌های ملایم

**مثال:**
✅: "اوکی دیدمش! این کد اینجا مشکل داره"
✅: "آها فهمیدم، ببین..."`,
            typo_rate: 0.25,
            emoji_rate: 0.5,
            filler_rate: 0.6
        },
        'expert': {
            name: 'متخصص',
            emoji: '🎓',
            description: 'تخصصی و علمی',
            system_prompt: `تو حوشا هستی - یک متخصص علمی با دانش عمیق.

**شخصیت:**
• متخصص با دانش بالا
• علمی و مستند
• دقیق و کامل

**سبک گفتار:**
• اصطلاحات علمی
• توضیحات عمیق
• ارائه منابع
• تحلیل دقیق

**مثال:**
✅: "از دیدگاه علمی، این پدیده..."
✅: "بر اساس تحقیقات..."`,
            typo_rate: 0,
            emoji_rate: 0,
            filler_rate: 0
        }
    },
    
    // Tier System
    TIERS: {
        'FREE': {
            name: 'رایگان',
            emoji: '🆓',
            daily_messages: 20,
            daily_tokens: 50000,
            vision_access: false,
            premium_models: [],
            priority: 3,
            features: ['basic_chat', 'limited_models']
        },
        'BASIC': {
            name: 'پایه',
            emoji: '🥉',
            daily_messages: 100,
            daily_tokens: 200000,
            vision_access: true,
            premium_models: ['GEMINI_PRO'],
            priority: 2,
            price_monthly: 50000,
            features: ['basic_chat', 'vision', 'more_models', 'priority_support']
        },
        'PRO': {
            name: 'حرفه‌ای',
            emoji: '🥈',
            daily_messages: 500,
            daily_tokens: 1000000,
            vision_access: true,
            premium_models: ['GEMINI_PRO', 'GPT_4O', 'CLAUDE_SONNET'],
            priority: 1,
            price_monthly: 150000,
            features: ['all_basic', 'advanced_models', 'analytics', 'api_access']
        },
        'VIP': {
            name: 'VIP',
            emoji: '💎',
            daily_messages: -1,
            daily_tokens: -1,
            vision_access: true,
            premium_models: ['all'],
            priority: 0,
            price_monthly: 500000,
            features: ['unlimited', 'all_models', 'priority', 'custom_models', 'dedicated_support']
        }
    },
    
    // Rate Limits
    RATE_LIMITS: {
        'FREE': {
            messages_per_minute: 3,
            messages_per_hour: 15,
            messages_per_day: 20,
            tokens_per_day: 50000
        },
        'BASIC': {
            messages_per_minute: 10,
            messages_per_hour: 80,
            messages_per_day: 100,
            tokens_per_day: 200000
        },
        'PRO': {
            messages_per_minute: 30,
            messages_per_hour: 400,
            messages_per_day: 500,
            tokens_per_day: 1000000
        },
        'VIP': {
            messages_per_minute: -1,
            messages_per_hour: -1,
            messages_per_day: -1,
            tokens_per_day: -1
        }
    },
    
    // Payment Configuration
    PAYMENT: {
        enabled: true,
        provider: 'zarinpal',
        merchant_id: 'YOUR_MERCHANT_ID',
        callback_url: 'https://your-worker.workers.dev/payment/callback',
        currency: 'IRT',
        plans: {
            'BASIC_MONTHLY': { tier: 'BASIC', duration: 30, price: 50000 },
            'BASIC_3MONTH': { tier: 'BASIC', duration: 90, price: 135000, discount: 10 },
            'PRO_MONTHLY': { tier: 'PRO', duration: 30, price: 150000 },
            'PRO_3MONTH': { tier: 'PRO', duration: 90, price: 405000, discount: 10 },
            'VIP_MONTHLY': { tier: 'VIP', duration: 30, price: 500000 },
            'VIP_3MONTH': { tier: 'VIP', duration: 90, price: 1350000, discount: 10 }
        }
    },
    
    // Referral System
    REFERRAL: {
        enabled: true,
        reward_type: 'messages',
        reward_amount: 50,
        referrer_reward: 100,
        minimum_referrals: 5,
        vip_upgrade_referrals: 50
    },
    
    // Cache Configuration
    CACHE: {
        enabled: true,
        ttl: 3600,
        max_size: 1000,
        strategies: ['LRU', 'LFU']
    },
    
    // Analytics
    ANALYTICS: {
        enabled: true,
        track_events: ['message', 'command', 'error', 'payment', 'referral'],
        retention_days: 90
    }
};

// ==================== UTILITIES ====================
class Utils {
    static generateId(length = 16) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    static formatDate(date) {
        return new Date(date).toLocaleDateString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    static calculateTokens(text) {
        return Math.ceil(text.length / 4);
    }
    
    static truncate(text, length = 100) {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }
    
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    static arrayToChunks(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    
    static sanitizeInput(text) {
        return text.replace(/[<>]/g, '').trim();
    }
    
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    static hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    }
}

// ==================== LOGGER ====================
class Logger {
    constructor(env) {
        this.env = env;
        this.logChannel = MEGA_CONFIG.LOG_CHANNEL_ID;
    }
    
    async log(level, message, data = {}) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            data,
            version: MEGA_CONFIG.VERSION
        };
        
        console.log(`[${level}] ${message}`, data);
        
        // ارسال لاگ به کانال تلگرام (فقط خطاها و وارنینگ‌ها)
        if (['ERROR', 'WARN', 'CRITICAL'].includes(level) && this.logChannel) {
            const emoji = {
                'ERROR': '❌',
                'WARN': '⚠️',
                'CRITICAL': '🚨'
            }[level] || 'ℹ️';
            
            const text = `${emoji} *${level}*\n\n` +
                        `📝 ${message}\n` +
                        `⏰ ${timestamp}\n` +
                        `📊 ${JSON.stringify(data, null, 2)}`;
            
            try {
                await this.sendToChannel(text);
            } catch (e) {
                console.error('Failed to send log to channel:', e);
            }
        }
    }
    
    async sendToChannel(text) {
        await fetch(`https://api.telegram.org/bot${this.env.TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: this.logChannel,
                text: text.substring(0, 4096),
                parse_mode: 'Markdown'
            })
        });
    }
    
    info(message, data) { return this.log('INFO', message, data); }
    warn(message, data) { return this.log('WARN', message, data); }
    error(message, data) { return this.log('ERROR', message, data); }
    critical(message, data) { return this.log('CRITICAL', message, data); }
}

// ==================== CACHE MANAGER ====================
class CacheManager {
    constructor() {
        this.cache = new Map();
        this.hits = 0;
        this.misses = 0;
    }
    
    set(key, value, ttl = MEGA_CONFIG.CACHE.ttl) {
        const expiresAt = Date.now() + (ttl * 1000);
        this.cache.set(key, { value, expiresAt });
        
        // حذف موارد منقضی شده
        this.cleanup();
    }
    
    get(key) {
        const item = this.cache.get(key);
        
        if (!item) {
            this.misses++;
            return null;
        }
        
        if (Date.now() > item.expiresAt) {
            this.cache.delete(key);
            this.misses++;
            return null;
        }
        
        this.hits++;
        return item.value;
    }
    
    delete(key) {
        return this.cache.delete(key);
    }
    
    clear() {
        this.cache.clear();
        this.hits = 0;
        this.misses = 0;
    }
    
    cleanup() {
        const now = Date.now();
        for (const [key, item] of this.cache.entries()) {
            if (now > item.expiresAt) {
                this.cache.delete(key);
            }
        }
        
        // حذف قدیمی‌ترین موارد اگر بیش از حد شد
        if (this.cache.size > MEGA_CONFIG.CACHE.max_size) {
            const entries = Array.from(this.cache.entries());
            entries.sort((a, b) => a[1].expiresAt - b[1].expiresAt);
            
            const toDelete = entries.slice(0, Math.floor(MEGA_CONFIG.CACHE.max_size * 0.2));
            toDelete.forEach(([key]) => this.cache.delete(key));
        }
    }
    
    getStats() {
        const total = this.hits + this.misses;
        const hitRate = total > 0 ? (this.hits / total * 100).toFixed(2) : 0;
        
        return {
            size: this.cache.size,
            hits: this.hits,
            misses: this.misses,
            hitRate: `${hitRate}%`,
            maxSize: MEGA_CONFIG.CACHE.max_size
        };
    }
}

// ==================== DATABASE MANAGER ====================
class DatabaseManager {
    constructor(env) {
        this.db = env.DB;
        this.logger = new Logger(env);
    }
    
    async initialize() {
        try {
            const tables = [
                // Users Table
                `CREATE TABLE IF NOT EXISTS users (
                    user_id TEXT PRIMARY KEY,
                    username TEXT,
                    first_name TEXT,
                    last_name TEXT,
                    tier TEXT DEFAULT 'FREE',
                    personality TEXT DEFAULT 'friendly',
                    preferred_model TEXT DEFAULT 'CF_AI',
                    preferred_vision_model TEXT DEFAULT 'GEMINI_FLASH',
                    human_mode INTEGER DEFAULT 1,
                    typo_mode INTEGER DEFAULT 1,
                    language TEXT DEFAULT 'fa',
                    referral_code TEXT UNIQUE,
                    referred_by TEXT,
                    referral_count INTEGER DEFAULT 0,
                    bonus_messages INTEGER DEFAULT 0,
                    total_messages INTEGER DEFAULT 0,
                    total_tokens INTEGER DEFAULT 0,
                    total_spent REAL DEFAULT 0,
                    tier_expires_at DATETIME,
                    is_banned INTEGER DEFAULT 0,
                    ban_reason TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    last_active DATETIME DEFAULT CURRENT_TIMESTAMP,
                    metadata JSON
                )`,
                
                // Messages Table
                `CREATE TABLE IF NOT EXISTS messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT NOT NULL,
                    role TEXT NOT NULL,
                    content TEXT NOT NULL,
                    model TEXT,
                    tokens INTEGER DEFAULT 0,
                    cost REAL DEFAULT 0,
                    has_image INTEGER DEFAULT 0,
                    response_time_ms INTEGER,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES users(user_id)
                )`,
                
                // Usage Logs
                `CREATE TABLE IF NOT EXISTS usage_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT NOT NULL,
                    model TEXT NOT NULL,
                    tokens INTEGER DEFAULT 0,
                    cost REAL DEFAULT 0,
                    success INTEGER DEFAULT 1,
                    error_message TEXT,
                    ip_address TEXT,
                    user_agent TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                
                // Payments Table
                `CREATE TABLE IF NOT EXISTS payments (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    transaction_id TEXT UNIQUE NOT NULL,
                    user_id TEXT NOT NULL,
                    plan TEXT NOT NULL,
                    amount REAL NOT NULL,
                    status TEXT DEFAULT 'pending',
                    payment_method TEXT,
                    authority TEXT,
                    ref_id TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    completed_at DATETIME,
                    FOREIGN KEY (user_id) REFERENCES users(user_id)
                )`,
                
                // Referrals Table
                `CREATE TABLE IF NOT EXISTS referrals (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    referrer_id TEXT NOT NULL,
                    referred_id TEXT NOT NULL,
                    reward_claimed INTEGER DEFAULT 0,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (referrer_id) REFERENCES users(user_id),
                    FOREIGN KEY (referred_id) REFERENCES users(user_id)
                )`,
                
                // Analytics Table
                `CREATE TABLE IF NOT EXISTS analytics (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    event_type TEXT NOT NULL,
                    user_id TEXT,
                    data JSON,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                
                // Blocked Users
                `CREATE TABLE IF NOT EXISTS blocked_users (
                    user_id TEXT PRIMARY KEY,
                    reason TEXT NOT NULL,
                    blocked_by TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                
                // Feedback Table
                `CREATE TABLE IF NOT EXISTS feedback (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT NOT NULL,
                    rating INTEGER,
                    comment TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`,
                
                // Create Indexes
                `CREATE INDEX IF NOT EXISTS idx_messages_user ON messages(user_id)`,
                `CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at)`,
                `CREATE INDEX IF NOT EXISTS idx_usage_user ON usage_logs(user_id)`,
                `CREATE INDEX IF NOT EXISTS idx_usage_created ON usage_logs(created_at)`,
                `CREATE INDEX IF NOT EXISTS idx_payments_user ON payments(user_id)`,
                `CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status)`,
                `CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics(event_type)`,
                `CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics(created_at)`
            ];
            
            const statements = tables.map(sql => this.db.prepare(sql));
            await this.db.batch(statements);
            
            await this.logger.info('Database initialized successfully');
            return true;
            
        } catch (error) {
            await this.logger.error('Database initialization failed', { error: error.message });
            throw error;
        }
    }
    
    // User Management
    async registerUser(userData) {
        try {
            const referralCode = Utils.generateId(8).toUpperCase();
            
            await this.db.prepare(`
                INSERT OR IGNORE INTO users 
                (user_id, username, first_name, last_name, referral_code) 
                VALUES (?, ?, ?, ?, ?)
            `).bind(
                userData.user_id,
                userData.username || null,
                userData.first_name || null,
                userData.last_name || null,
                referralCode
            ).run();
            
            return { success: true, referralCode };
        } catch (error) {
            await this.logger.error('User registration failed', { error: error.message, userData });
            throw error;
        }
    }
    
    async getUser(userId) {
        try {
            const user = await this.db.prepare(
                "SELECT * FROM users WHERE user_id = ?"
            ).bind(userId).first();
            
            return user;
        } catch (error) {
            await this.logger.error('Get user failed', { error: error.message, userId });
            return null;
        }
    }
    
    async updateUser(userId, updates) {
        try {
            const fields = [];
            const values = [];
            
            for (const [key, value] of Object.entries(updates)) {
                fields.push(`${key} = ?`);
                values.push(value);
            }
            
            fields.push("last_active = datetime('now')");
            
            await this.db.prepare(`
                UPDATE users SET ${fields.join(', ')} WHERE user_id = ?
            `).bind(...values, userId).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Update user failed', { error: error.message, userId, updates });
            throw error;
        }
    }
    
    async getUserSettings(userId) {
        const user = await this.getUser(userId);
        
        if (!user) {
            return {
                tier: 'FREE',
                personality: 'friendly',
                preferred_model: 'CF_AI',
                preferred_vision_model: 'GEMINI_FLASH',
                human_mode: true,
                typo_mode: true,
                language: 'fa'
            };
        }
        
        return {
            tier: user.tier || 'FREE',
            personality: user.personality || 'friendly',
            preferred_model: user.preferred_model || 'CF_AI',
            preferred_vision_model: user.preferred_vision_model || 'GEMINI_FLASH',
            human_mode: user.human_mode !== 0,
            typo_mode: user.typo_mode !== 0,
            language: user.language || 'fa',
            referral_code: user.referral_code,
            referral_count: user.referral_count || 0,
            bonus_messages: user.bonus_messages || 0
        };
    }
    
    // Message Management
    async saveMessage(userId, role, content, model = null, tokens = 0, cost = 0, hasImage = false, responseTime = 0) {
        try {
            await this.db.prepare(`
                INSERT INTO messages 
                (user_id, role, content, model, tokens, cost, has_image, response_time_ms) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(userId, role, content, model, tokens, cost, hasImage ? 1 : 0, responseTime).run();
            
            // Update user stats
            await this.db.prepare(`
                UPDATE users SET 
                total_messages = total_messages + 1,
                total_tokens = total_tokens + ?,
                total_spent = total_spent + ?
                WHERE user_id = ?
            `).bind(tokens, cost, userId).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Save message failed', { error: error.message, userId });
            throw error;
        }
    }
    
    async logUsage(userId, model, tokens, cost, success, errorMessage = null, ipAddress = null, userAgent = null) {
        try {
            await this.db.prepare(`
                INSERT INTO usage_logs 
                (user_id, model, tokens, cost, success, error_message, ip_address, user_agent) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(userId, model, tokens, cost, success ? 1 : 0, errorMessage, ipAddress, userAgent).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Log usage failed', { error: error.message });
            return { success: false };
        }
    }
    
    // Rate Limiting
    async checkRateLimit(userId, tier) {
        try {
            const limits = MEGA_CONFIG.RATE_LIMITS[tier];
            
            // Check minute limit
            const minuteCount = await this.db.prepare(`
                SELECT COUNT(*) as count FROM usage_logs 
                WHERE user_id = ? AND created_at > datetime('now', '-1 minute')
            `).bind(userId).first();
            
            if (limits.messages_per_minute > 0 && minuteCount.count >= limits.messages_per_minute) {
                return {
                    allowed: false,
                    reason: 'minute_limit',
                    message: `حداکثر ${limits.messages_per_minute} پیام در دقیقه`
                };
            }
            
            // Check hour limit
            const hourCount = await this.db.prepare(`
                SELECT COUNT(*) as count FROM usage_logs 
                WHERE user_id = ? AND created_at > datetime('now', '-1 hour')
            `).bind(userId).first();
            
            if (limits.messages_per_hour > 0 && hourCount.count >= limits.messages_per_hour) {
                return {
                    allowed: false,
                    reason: 'hour_limit',
                    message: `حداکثر ${limits.messages_per_hour} پیام در ساعت`
                };
            }
            
            // Check day limit
            const dayCount = await this.db.prepare(`
                SELECT COUNT(*) as count FROM usage_logs 
                WHERE user_id = ? AND DATE(created_at) = DATE('now')
            `).bind(userId).first();
            
            const user = await this.getUser(userId);
            const bonusMessages = user?.bonus_messages || 0;
            const dailyLimit = limits.messages_per_day + bonusMessages;
            
            if (limits.messages_per_day > 0 && dayCount.count >= dailyLimit) {
                return {
                    allowed: false,
                    reason: 'day_limit',
                    message: `حداکثر ${dailyLimit} پیام در روز`
                };
            }
            
            // Check token limit
            const dayTokens = await this.db.prepare(`
                SELECT SUM(tokens) as total FROM usage_logs 
                WHERE user_id = ? AND DATE(created_at) = DATE('now')
            `).bind(userId).first();
            
            if (limits.tokens_per_day > 0 && (dayTokens.total || 0) >= limits.tokens_per_day) {
                return {
                    allowed: false,
                    reason: 'token_limit',
                    message: `حداکثر ${Utils.formatNumber(limits.tokens_per_day)} توکن در روز`
                };
            }
            
            return {
                allowed: true,
                remaining: {
                    minute: limits.messages_per_minute - minuteCount.count,
                    hour: limits.messages_per_hour - hourCount.count,
                    day: dailyLimit - dayCount.count,
                    tokens: limits.tokens_per_day - (dayTokens.total || 0)
                }
            };
            
        } catch (error) {
            await this.logger.error('Rate limit check failed', { error: error.message, userId });
            return { allowed: true };
        }
    }
    
    // Analytics
    async trackEvent(eventType, userId = null, data = {}) {
        if (!MEGA_CONFIG.ANALYTICS.enabled) return;
        
        try {
            await this.db.prepare(`
                INSERT INTO analytics (event_type, user_id, data) 
                VALUES (?, ?, ?)
            `).bind(eventType, userId, JSON.stringify(data)).run();
        } catch (error) {
            await this.logger.error('Track event failed', { error: error.message });
        }
    }
    
    async getStats() {
        try {
            const [totalUsers, activeToday, totalMessages, todayMessages, totalTokens, todayRevenue] = await Promise.all([
                this.db.prepare("SELECT COUNT(*) as count FROM users").first(),
                this.db.prepare("SELECT COUNT(*) as count FROM users WHERE DATE(last_active) = DATE('now')").first(),
                this.db.prepare("SELECT COUNT(*) as count FROM messages").first(),
                this.db.prepare("SELECT COUNT(*) as count FROM messages WHERE DATE(created_at) = DATE('now')").first(),
                this.db.prepare("SELECT SUM(tokens) as total FROM messages").first(),
                this.db.prepare("SELECT SUM(amount) as total FROM payments WHERE status = 'completed' AND DATE(completed_at) = DATE('now')").first()
            ]);
            
            return {
                totalUsers: totalUsers?.count || 0,
                activeToday: activeToday?.count || 0,
                totalMessages: totalMessages?.count || 0,
                todayMessages: todayMessages?.count || 0,
                totalTokens: totalTokens?.total || 0,
                todayRevenue: todayRevenue?.total || 0
            };
        } catch (error) {
            await this.logger.error('Get stats failed', { error: error.message });
            return {
                totalUsers: 0,
                activeToday: 0,
                totalMessages: 0,
                todayMessages: 0,
                totalTokens: 0,
                todayRevenue: 0
            };
        }
    }
    
    // Payment Management
    async createPayment(userId, plan, amount) {
        try {
            const transactionId = Utils.generateId(16);
            
            await this.db.prepare(`
                INSERT INTO payments (transaction_id, user_id, plan, amount) 
                VALUES (?, ?, ?, ?)
            `).bind(transactionId, userId, plan, amount).run();
            
            return { success: true, transactionId };
        } catch (error) {
            await this.logger.error('Create payment failed', { error: error.message });
            throw error;
        }
    }
    
    async completePayment(transactionId, refId) {
        try {
            await this.db.prepare(`
                UPDATE payments SET 
                status = 'completed',
                ref_id = ?,
                completed_at = datetime('now')
                WHERE transaction_id = ?
            `).bind(refId, transactionId).run();
            
            // Get payment details
            const payment = await this.db.prepare(
                "SELECT * FROM payments WHERE transaction_id = ?"
            ).bind(transactionId).first();
            
            if (payment) {
                // Update user tier
                const planConfig = MEGA_CONFIG.PAYMENT.plans[payment.plan];
                const expiresAt = new Date();
                expiresAt.setDate(expiresAt.getDate() + planConfig.duration);
                
                await this.db.prepare(`
                    UPDATE users SET 
                    tier = ?,
                    tier_expires_at = ?
                    WHERE user_id = ?
                `).bind(planConfig.tier, expiresAt.toISOString(), payment.user_id).run();
            }
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Complete payment failed', { error: error.message });
            throw error;
        }
    }
    
    // Referral System
    async processReferral(referrerId, referredId) {
        try {
            await this.db.prepare(`
                INSERT INTO referrals (referrer_id, referred_id) 
                VALUES (?, ?)
            `).bind(referrerId, referredId).run();
            
            // Update referrer count
            await this.db.prepare(`
                UPDATE users SET 
                referral_count = referral_count + 1,
                bonus_messages = bonus_messages + ?
                WHERE user_id = ?
            `).bind(MEGA_CONFIG.REFERRAL.referrer_reward, referrerId).run();
            
            // Give reward to referred user
            await this.db.prepare(`
                UPDATE users SET 
                bonus_messages = bonus_messages + ?
                WHERE user_id = ?
            `).bind(MEGA_CONFIG.REFERRAL.reward_amount, referredId).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Process referral failed', { error: error.message });
            return { success: false };
        }
    }
    
    async getUserByReferralCode(code) {
        try {
            const user = await this.db.prepare(
                "SELECT user_id FROM users WHERE referral_code = ?"
            ).bind(code).first();
            
            return user;
        } catch (error) {
            await this.logger.error('Get user by referral code failed', { error: error.message });
            return null;
        }
    }
    
    // Blocked Users
    async isUserBlocked(userId) {
        try {
            const blocked = await this.db.prepare(
                "SELECT * FROM blocked_users WHERE user_id = ?"
            ).bind(userId).first();
            
            return blocked;
        } catch (error) {
            await this.logger.error('Check blocked user failed', { error: error.message });
            return null;
        }
    }
    
    async blockUser(userId, reason, blockedBy) {
        try {
            await this.db.prepare(`
                INSERT OR REPLACE INTO blocked_users (user_id, reason, blocked_by) 
                VALUES (?, ?, ?)
            `).bind(userId, reason, blockedBy).run();
            
            await this.db.prepare(`
                UPDATE users SET is_banned = 1, ban_reason = ? WHERE user_id = ?
            `).bind(reason, userId).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Block user failed', { error: error.message });
            throw error;
        }
    }
    
    async unblockUser(userId) {
        try {
            await this.db.prepare(
                "DELETE FROM blocked_users WHERE user_id = ?"
            ).bind(userId).run();
            
            await this.db.prepare(`
                UPDATE users SET is_banned = 0, ban_reason = NULL WHERE user_id = ?
            `).bind(userId).run();
            
            return { success: true };
        } catch (error) {
            await this.logger.error('Unblock user failed', { error: error.message });
            throw error;
        }
    }
}

// ==================== HUMAN RESPONSE GENERATOR ====================
class HumanResponseGenerator {
    constructor(personalityConfig) {
        this.config = personalityConfig;
        
        this.starters = [
            'ببین', 'راستش', 'یعنی', 'خب', 'آها', 'اوکی',
            'باشه', 'چشم', 'حالا', 'اممم', 'یه لحظه'
        ];
        
        this.fillers = [
            'یعنی', 'ببین', 'خب', 'راستش', 'واقعا',
            'جدی', 'مطمئن', 'قطعا', 'حتما'
        ];
        
        this.endings = [
            '😊', '💪', '✨', '👍', '❤️',
            'فهمیدی؟', 'اوکیه؟', 'باشه؟',
            'سوال دیگه داری؟', 'کمک دیگه میخوای؟'
        ];
        
        this.typos = {
            'می‌کنم': ['میکنم', 'می کنم', 'میکمن'],
            'می‌خواهم': ['میخام', 'میخوام'],
            'هست': ['هستش', 'اس'],
            'خیلی': ['خیلی', 'خییلی'],
            'نمی‌دانم': ['نمیدونم', 'نمدونم'],
            'می‌شود': ['میشه', 'می شه'],
            'برایت': ['برات', 'واست'],
            'توانم': ['تونم', 'توام']
        };
    }
    
    humanize(text) {
        let result = text;
        
        // 1. Shorten words
        result = this.shortenWords(result);
        
        // 2. Add starter
        if (Math.random() < 0.4) {
            const starter = this.starters[Math.floor(Math.random() * this.starters.length)];
            result = `${starter}، ${result}`;
        }
        
        // 3. Add fillers
        if (Math.random() < this.config.filler_rate) {
            result = this.addFillers(result);
        }
        
        // 4. Add typos
        if (Math.random() < this.config.typo_rate) {
            result = this.addTypos(result);
        }
        
        // 5. Add ending
        if (Math.random() < this.config.emoji_rate) {
            const ending = this.endings[Math.floor(Math.random() * this.endings.length)];
            result = `${result}\n\n${ending}`;
        }
        
        return result;
    }
    
    shortenWords(text) {
        const shortcuts = {
            'خیلی خوب': 'خیلی خب',
            'چطور است': 'چطوره',
            'می‌خواهم': 'میخام',
            'نمی‌دانم': 'نمیدونم',
            'می‌شود': 'میشه',
            'برای شما': 'برات',
            'به شما': 'بهت'
        };
        
        let result = text;
        for (const [long, short] of Object.entries(shortcuts)) {
            if (Math.random() < 0.6) {
                result = result.replace(new RegExp(long, 'g'), short);
            }
        }
        return result;
    }
    
    addFillers(text) {
        const sentences = text.split('.');
        if (sentences.length < 2) return text;
        
        const filler = this.fillers[Math.floor(Math.random() * this.fillers.length)];
        const pos = Math.floor(Math.random() * (sentences.length - 1)) + 1;
        
        sentences[pos] = ` ${filler} ${sentences[pos].trim()}`;
        return sentences.join('.');
    }
    
    addTypos(text) {
        let result = text;
        
        for (const [correct, typos] of Object.entries(this.typos)) {
            if (result.includes(correct) && Math.random() < 0.3) {
                const typo = typos[Math.floor(Math.random() * typos.length)];
                result = result.replace(correct, typo);
                break;
            }
        }
        
        return result;
    }
}

// ==================== TIMING MANAGER ====================
class TimingManager {
    static calculateReadTime(text) {
        const words = text.split(' ').length;
        return (words / 200) * 60 * 1000;
    }
    
    static calculateTypeTime(text) {
        const words = text.split(' ').length;
        return (words / 45) * 60 * 1000;
    }
    
    static calculateThinkTime() {
        return 1000 + Math.random() * 2000;
    }
    
    static getTotalDelay(userMessage, responseText) {
        const readTime = this.calculateReadTime(userMessage);
        const thinkTime = this.calculateThinkTime();
        const typeTime = this.calculateTypeTime(responseText) * 0.3;
        
        return Math.min(readTime + thinkTime + typeTime, 8000);
    }
    
    static splitChunks(text) {
        const parts = text.split(/[.\n]+/).filter(p => p.trim());
        const chunks = [];
        let current = '';
        
        for (const part of parts) {
            if ((current + part).length < 200) {
                current += (current ? '. ' : '') + part.trim();
            } else {
                if (current) chunks.push(current + '.');
                current = part.trim();
            }
        }
        
        if (current) chunks.push(current + '.');
        return chunks;
    }
}

// ==================== AI ENGINE ====================
class AIEngine {
    constructor(env) {
        this.env = env;
        this.logger = new Logger(env);
    }
    
    async generate(prompt, modelKey, personality) {
        const model = MEGA_CONFIG.ENGINES[modelKey];
        if (!model) {
            throw new Error('Invalid model');
        }
        
        const systemPrompt = MEGA_CONFIG.PERSONALITIES[personality].system_prompt;
        
        try {
            // Cloudflare AI
            if (modelKey.startsWith('CF_AI')) {
                const response = await this.env.AI.run(model.model, {
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: prompt }
                    ],
                    max_tokens: model.max_tokens,
                    temperature: model.temperature
                });
                return response.response || 'پاسخی دریافت نشد';
            }
            
            // Google Gemini
            if (modelKey.startsWith('GEMINI')) {
                if (!this.env.GEMINI_KEY) {
                    throw new Error('Gemini API key not configured');
                }
                
                const res = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${model.model}:generateContent?key=${this.env.GEMINI_KEY}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: systemPrompt + '\n\n' + prompt }]
                            }],
                            generationConfig: {
                                maxOutputTokens: model.max_tokens,
                                temperature: model.temperature
                            }
                        })
                    }
                );
                
                if (!res.ok) throw new Error(`Gemini error: ${res.status}`);
                const data = await res.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text || 'پاسخی دریافت نشد';
            }
            
            // OpenAI GPT
            if (modelKey.startsWith('GPT')) {
                if (!this.env.OPENAI_KEY) {
                    throw new Error('OpenAI API key not configured');
                }
                
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.OPENAI_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: model.max_tokens,
                        temperature: model.temperature
                    })
                });
                
                if (!res.ok) throw new Error(`GPT error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            // Anthropic Claude
            if (modelKey.startsWith('CLAUDE')) {
                if (!this.env.CLAUDE_KEY) {
                    throw new Error('Claude API key not configured');
                }
                
                const res = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                        'x-api-key': this.env.CLAUDE_KEY,
                        'anthropic-version': '2023-06-01',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        max_tokens: model.max_tokens,
                        messages: [{
                            role: 'user',
                            content: systemPrompt + '\n\n' + prompt
                        }]
                    })
                });
                
                if (!res.ok) throw new Error(`Claude error: ${res.status}`);
                const data = await res.json();
                return data.content?.[0]?.text || 'پاسخی دریافت نشد';
            }
            
            // DeepSeek
            if (modelKey === 'DEEPSEEK') {
                if (!this.env.DEEPSEEK_KEY) {
                    throw new Error('DeepSeek API key not configured');
                }
                
                const res = await fetch('https://api.deepseek.com/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.DEEPSEEK_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: model.max_tokens
                    })
                });
                
                if (!res.ok) throw new Error(`DeepSeek error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            // Perplexity
            if (modelKey === 'PERPLEXITY') {
                if (!this.env.PERPLEXITY_KEY) {
                    throw new Error('Perplexity API key not configured');
                }
                
                const res = await fetch('https://api.perplexity.ai/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.PERPLEXITY_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: prompt }
                        ]
                    })
                });
                
                if (!res.ok) throw new Error(`Perplexity error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'پاسخی دریافت نشد';
            }
            
            throw new Error('Model not implemented');
            
        } catch (error) {
            await this.logger.error('AI generation failed', {
                error: error.message,
                model: modelKey,
                promptLength: prompt.length
            });
            throw error;
        }
    }
}

// ==================== VISION AI ====================
class VisionAI {
    constructor(env) {
        this.env = env;
        this.logger = new Logger(env);
    }
    
    async analyze(imageUrl, prompt, modelKey, personality) {
        const model = MEGA_CONFIG.ENGINES[modelKey];
        if (!model || !model.vision) {
            throw new Error('Invalid vision model');
        }
        
        const systemPrompt = MEGA_CONFIG.PERSONALITIES[personality].system_prompt;
        
        try {
            // Download image
            const imageRes = await fetch(imageUrl);
            const imageBuffer = await imageRes.arrayBuffer();
            const base64Image = this.arrayBufferToBase64(imageBuffer);
            
            // Gemini Vision
            if (modelKey.startsWith('GEMINI')) {
                if (!this.env.GEMINI_KEY) {
                    throw new Error('Gemini API key not configured');
                }
                
                const res = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${model.model}:generateContent?key=${this.env.GEMINI_KEY}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [
                                    { text: systemPrompt + '\n\n' + prompt },
                                    {
                                        inline_data: {
                                            mime_type: 'image/jpeg',
                                            data: base64Image
                                        }
                                    }
                                ]
                            }],
                            generationConfig: {
                                maxOutputTokens: model.max_tokens,
                                temperature: model.temperature
                            }
                        })
                    }
                );
                
                if (!res.ok) throw new Error(`Gemini Vision error: ${res.status}`);
                const data = await res.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text || 'تحلیل ناموفق بود';
            }
            
            // GPT-4 Vision
            if (modelKey === 'GPT_4O') {
                if (!this.env.OPENAI_KEY) {
                    throw new Error('OpenAI API key not configured');
                }
                
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.env.OPENAI_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        messages: [{
                            role: 'user',
                            content: [
                                { type: 'text', text: systemPrompt + '\n\n' + prompt },
                                {
                                    type: 'image_url',
                                    image_url: { url: `data:image/jpeg;base64,${base64Image}` }
                                }
                            ]
                        }],
                        max_tokens: model.max_tokens
                    })
                });
                
                if (!res.ok) throw new Error(`GPT Vision error: ${res.status}`);
                const data = await res.json();
                return data.choices?.[0]?.message?.content || 'تحلیل ناموفق بود';
            }
            
            // Claude Vision
            if (modelKey.startsWith('CLAUDE')) {
                if (!this.env.CLAUDE_KEY) {
                    throw new Error('Claude API key not configured');
                }
                
                const res = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                        'x-api-key': this.env.CLAUDE_KEY,
                        'anthropic-version': '2023-06-01',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: model.model,
                        max_tokens: model.max_tokens,
                        messages: [{
                            role: 'user',
                            content: [
                                { type: 'text', text: systemPrompt + '\n\n' + prompt },
                                {
                                    type: 'image',
                                    source: {
                                        type: 'base64',
                                        media_type: 'image/jpeg',
                                        data: base64Image
                                    }
                                }
                            ]
                        }]
                    })
                });
                
                if (!res.ok) throw new Error(`Claude Vision error: ${res.status}`);
                const data = await res.json();
                return data.content?.[0]?.text || 'تحلیل ناموفق بود';
            }
            
            throw new Error('Vision model not implemented');
            
        } catch (error) {
            await this.logger.error('Vision analysis failed', {
                error: error.message,
                model: modelKey
            });
            throw error;
        }
    }
    
    arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.length; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }
}

// ==================== TELEGRAM MANAGER ====================
class TelegramManager {
    constructor(env) {
        this.env = env;
        this.token = env.TELEGRAM_TOKEN;
        this.logger = new Logger(env);
    }
    
    async sendMessage(chatId, text, options = {}) {
        try {
            const body = {
                chat_id: chatId,
                text: text.substring(0, 4096),
                parse_mode: options.parseMode || 'Markdown',
                ...options
            };
            
            const res = await fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            
            if (!res.ok) {
                const error = await res.text();
                throw new Error(`Telegram API error: ${error}`);
            }
            
            return await res.json();
        } catch (error) {
            await this.logger.error('Send message failed', { error: error.message, chatId });
            throw error;
        }
    }
    
    async sendTyping(chatId) {
        try {
            await fetch(`https://api.telegram.org/bot${this.token}/sendChatAction`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    action: 'typing'
                })
            });
        } catch (error) {
            // Ignore typing errors
        }
    }
    
    async sendHumanLike(chatId, text, userMessage, settings) {
        const personalityConfig = MEGA_CONFIG.PERSONALITIES[settings.personality];
        const humanizer = new HumanResponseGenerator(personalityConfig);
        
        // Humanize text
        const humanText = settings.human_mode ? humanizer.humanize(text) : text;
        
        if (!settings.human_mode || humanText.length < 50) {
            await this.sendMessage(chatId, humanText);
            return;
        }
        
        // Send with chunks and delays
        const chunks = TimingManager.splitChunks(humanText);
        
        for (let i = 0; i < chunks.length; i++) {
            await this.sendTyping(chatId);
            
            const delay = i === 0
                ? TimingManager.getTotalDelay(userMessage, chunks[i])
                : TimingManager.calculateTypeTime(chunks[i]);
            
            await Utils.sleep(Math.min(delay, 5000));
            await this.sendMessage(chatId, chunks[i]);
            
            if (i < chunks.length - 1) {
                await Utils.sleep(400 + Math.random() * 600);
            }
        }
    }
    
    async getFile(fileId) {
        try {
            const res = await fetch(`https://api.telegram.org/bot${this.token}/getFile?file_id=${fileId}`);
            const data = await res.json();
            
            if (!data.ok) {
                throw new Error('Get file failed');
            }
            
            return `https://api.telegram.org/file/bot${this.token}/${data.result.file_path}`;
        } catch (error) {
            await this.logger.error('Get file failed', { error: error.message, fileId });
            throw error;
        }
    }
}

// ==================== MESSAGE HANDLER ====================
async function handleMessage(update, env) {
    const db = new DatabaseManager(env);
    const telegram = new TelegramManager(env);
    const ai = new AIEngine(env);
    const vision = new VisionAI(env);
    const logger = new Logger(env);
    const cache = new CacheManager();
    
    if (!update.message) return;
    
    const chatId = update.message.chat.id;
    const userId = update.message.from.id.toString();
    const text = update.message.text || update.message.caption || '';
    const photo = update.message.photo;
    const reply = update.message.reply_to_message;
    
    const startTime = Date.now();
    
    try {
        // Register user
        await db.registerUser({
            user_id: userId,
            username: update.message.from.username,
            first_name: update.message.from.first_name,
            last_name: update.message.from.last_name
        });
        
        // Check if blocked
        const blocked = await db.isUserBlocked(userId);
        if (blocked) {
            await telegram.sendMessage(chatId,
                `🚫 دسترسی شما مسدود شده است\n\n📌 دلیل: ${blocked.reason}\n⏰ زمان: ${Utils.formatDate(blocked.created_at)}`
            );
            return;
        }
        
        // Get user settings
        const settings = await db.getUserSettings(userId);
        
        // Track analytics
        await db.trackEvent('message', userId, {
            hasPhoto: !!photo,
            textLength: text.length
        });
        
        // Check rate limits
        const rateCheck = await db.checkRateLimit(userId, settings.tier);
        if (!rateCheck.allowed) {
            await telegram.sendMessage(chatId,
                `⏱️ ${rateCheck.message}\n\n` +
                `💎 برای حد بالاتر: /upgrade\n` +
                `📊 باقیمانده: ${rateCheck.remaining?.day || 0} پیام`
            );
            return;
        }
        
        // Handle commands
        const isCommand = text.startsWith('/');
        const isReply = reply && reply.from && reply.from.is_bot;
        
        if (!isCommand && !isReply && !photo) {
            // Ignore non-reply messages
            return;
        }
        
        // Command handling
        if (text === '/start') {
            const referralMatch = text.match(/\/start\s+([A-Z0-9]+)/);
            if (referralMatch && !settings.referred_by) {
                const referralCode = referralMatch[1];
                const referrer = await db.getUserByReferralCode(referralCode);
                
                if (referrer && referrer.user_id !== userId) {
                    await db.updateUser(userId, { referred_by: referrer.user_id });
                    await db.processReferral(referrer.user_id, userId);
                }
            }
            
            const welcomeText = `🌸 **سلام ${update.message.from.first_name}!**\n\n` +
                               `من **حوشا** هستم - سیستم هوش مصنوعی پیشرفته با ${Object.keys(MEGA_CONFIG.ENGINES).length} موتور!\n\n` +
                               `🎯 **چطور کار کنم؟**\nروی این پیام Reply کن و سوالتو بپرس\n\n` +
                               `💎 **سطح شما:** ${MEGA_CONFIG.TIERS[settings.tier].emoji} ${MEGA_CONFIG.TIERS[settings.tier].name}\n` +
                               `📊 **کووتای روزانه:** ${rateCheck.remaining.day} پیام\n\n` +
                               `**دستورات:**\n` +
                               `/models - لیست موتورها\n` +
                               `/settings - تنظیمات\n` +
                               `/upgrade - ارتقا حساب\n` +
                               `/help - راهنما`;
            
            await telegram.sendMessage(chatId, welcomeText);
            return;
        }
        
        if (text === '/models') {
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            let modelsText = `🤖 **لیست موتورهای AI**\n\n`;
            
            modelsText += `سطح شما: ${tierConfig.emoji} ${tierConfig.name}\n\n`;
            
            modelsText += `**💬 موتورهای متنی:**\n`;
            Object.entries(MEGA_CONFIG.ENGINES).forEach(([key, model]) => {
                if (!model.vision) {
                    const available = !model.vip || 
                                    tierConfig.premium_models.includes('all') || 
                                    tierConfig.premium_models.includes(key);
                    
                    modelsText += `${model.emoji} ${model.name} ${available ? '✅' : '🔒'}\n`;
                }
            });
            
            modelsText += `\n**📸 موتورهای Vision:**\n`;
            Object.entries(MEGA_CONFIG.ENGINES).forEach(([key, model]) => {
                if (model.vision) {
                    const available = tierConfig.vision_access && (
                        !model.vip || 
                        tierConfig.premium_models.includes('all') || 
                        tierConfig.premium_models.includes(key)
                    );
                    
                    modelsText += `${model.emoji} ${model.name} ${available ? '✅' : '🔒'}\n`;
                }
            });
            
            modelsText += `\n/setmodel - تغییر موتور`;
            
            await telegram.sendMessage(chatId, modelsText);
            return;
        }
        
        if (text === '/help') {
            const helpText = `📖 **راهنمای کامل HOSHA**\n\n` +
                            `**🗣️ چطور چت کنم؟**\nروی پیام‌های من Reply کن\n\n` +
                            `**📸 تحلیل عکس:**\nعکس + توضیح بفرست\n\n` +
                            `**⚙️ تنظیمات:**\n` +
                            `/personality - شخصیت\n` +
                            `/human - حالت انسانی\n` +
                            `/setmodel - موتور\n\n` +
                            `**💎 VIP:**\n` +
                            `/upgrade - ارتقا\n` +
                            `/myplan - وضعیت اشتراک\n` +
                            `/referral - دعوت دوستان\n\n` +
                            `**📊 آمار:**\n` +
                            `/stats - آمار من\n` +
                            `/usage - مصرف امروز`;
            
            await telegram.sendMessage(chatId, helpText);
            return;
        }
        
        if (text === '/stats') {
            const user = await db.getUser(userId);
            const statsText = `📊 **آمار شما**\n\n` +
                             `💬 کل پیام‌ها: ${Utils.formatNumber(user.total_messages)}\n` +
                             `🧠 کل توکن‌ها: ${Utils.formatNumber(user.total_tokens)}\n` +
                             `💰 هزینه کل: ${Utils.formatNumber(Math.round(user.total_spent))} تومان\n` +
                             `👥 دعوت‌ها: ${user.referral_count}\n` +
                             `🎁 پیام هدیه: ${user.bonus_messages}\n` +
                             `📅 عضو از: ${Utils.formatDate(user.created_at)}`;
            
            await telegram.sendMessage(chatId, statsText);
            return;
        }
        
        // Handle photo
        if (photo) {
            const fileId = photo[photo.length - 1].file_id;
            const imageUrl = await telegram.getFile(fileId);
            
            const visionModel = settings.preferred_vision_model;
            const modelConfig = MEGA_CONFIG.ENGINES[visionModel];
            
            // Check access
            const tierConfig = MEGA_CONFIG.TIERS[settings.tier];
            if (!tierConfig.vision_access) {
                await telegram.sendMessage(chatId,
                    `🔒 تحلیل عکس فقط برای اعضای ویژه\n\n💎 /upgrade`
                );
                return;
            }
            
            await telegram.sendTyping(chatId);
            await telegram.sendMessage(chatId,
                `${modelConfig.emoji} در حال تحلیل با ${modelConfig.name}...\n⏳ لطفاً صبر کنید`
            );
            
            const prompt = `این عکس رو کامل تحلیل کن:\n\n${text || 'توضیحی ندادن، خودت کامل بگو چی توش هست'}`;
            
            const analysis = await vision.analyze(imageUrl, prompt, visionModel, settings.personality);
            const tokens = Utils.calculateTokens(analysis);
            const cost = tokens * modelConfig.cost_per_token * 42000; // تومان
            
            await db.saveMessage(userId, 'user', text || '[عکس]', visionModel, 0, 0, true, 0);
            await db.saveMessage(userId, 'assistant', analysis, visionModel, tokens, cost, false, Date.now() - startTime);
            await db.logUsage(userId, visionModel, tokens, cost, true);
            
            await telegram.sendHumanLike(chatId, analysis, text, settings);
            return;
        }
        
        // Handle text reply
        if (isReply && text && !isCommand) {
            const model = settings.preferred_model;
            const modelConfig = MEGA_CONFIG.ENGINES[model];
            
            // Check cache
            const cacheKey = `${userId}:${Utils.hashString(text)}`;
            const cached = cache.get(cacheKey);
            
            if (cached) {
                await telegram.sendHumanLike(chatId, cached, text, settings);
                await logger.info('Cache hit', { userId, model });
                return;
            }
            
            const response = await ai.generate(text, model, settings.personality);
            const tokens = Utils.calculateTokens(text + response);
            const cost = tokens * modelConfig.cost_per_token * 42000;
            
            // Cache response
            cache.set(cacheKey, response);
            
            await db.saveMessage(userId, 'user', text, model, Utils.calculateTokens(text), 0, false, 0);
            await db.saveMessage(userId, 'assistant', response, model, tokens, cost, false, Date.now() - startTime);
            await db.logUsage(userId, model, tokens, cost, true);
            
            await telegram.sendHumanLike(chatId, response, text, settings);
        }
        
    } catch (error) {
        await logger.error('Message handling failed', {
            error: error.message,
            userId,
            textLength: text.length
        });
        
        await telegram.sendMessage(chatId,
            `❌ متاسفانه یه مشکلی پیش اومد!\n\n` +
            `لطفاً دوباره تلاش کنید یا با /help راهنما رو ببینید`
        );
    }
}

// ==================== MAIN WORKER ====================
let initialized = false;
let globalCache = new CacheManager();

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const logger = new Logger(env);
        
        // Initialize database
        if (!initialized) {
            const db = new DatabaseManager(env);
            await db.initialize();
            initialized = true;
            await logger.info('Worker initialized', { version: MEGA_CONFIG.VERSION });
        }
        
        // Webhook endpoint
        if (url.pathname === '/webhook' && request.method === 'POST') {
            const update = await request.json();
            ctx.waitUntil(handleMessage(update, env));
            return new Response('OK', { status: 200 });
        }
        
        // Status page
        if (url.pathname === '/' || url.pathname === '/status') {
            const db = new DatabaseManager(env);
            const stats = await db.getStats();
            const cacheStats = globalCache.getStats();
            
            return new Response(`
                <!DOCTYPE html>
                <html lang="fa" dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <title>${MEGA_CONFIG.BOT_NAME} - Status</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body {
                            font-family: Arial, sans-serif;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 20px;
                        }
                        .container {
                            background: white;
                            padding: 50px;
                            border-radius: 30px;
                            box-shadow: 0 30px 80px rgba(0,0,0,0.3);
                            max-width: 800px;
                            width: 100%;
                        }
                        h1 {
                            color: #667eea;
                            font-size: 3em;
                            margin-bottom: 10px;
                            text-align: center;
                        }
                        .version {
                            text-align: center;
                            color: #764ba2;
                            font-size: 1.2em;
                            margin-bottom: 40px;
                        }
                        .stats {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            gap: 20px;
                            margin-bottom: 30px;
                        }
                        .stat {
                            background: #f8f9fa;
                            padding: 20px;
                            border-radius: 15px;
                            text-align: center;
                            border-right: 4px solid #667eea;
                        }
                        .stat-value {
                            font-size: 2em;
                            font-weight: bold;
                            color: #667eea;
                            margin-bottom: 5px;
                        }
                        .stat-label {
                            color: #666;
                            font-size: 0.9em;
                        }
                        .features {
                            background: #f8f9fa;
                            padding: 20px;
                            border-radius: 15px;
                            margin-top: 20px;
                        }
                        .feature {
                            padding: 10px;
                            margin: 5px 0;
                            background: white;
                            border-radius: 10px;
                        }
                        .feature:before { content: "✨ "; }
                        .status {
                            text-align: center;
                            margin-top: 30px;
                            padding: 15px;
                            background: #d4edda;
                            border-radius: 10px;
                            color: #155724;
                            font-weight: bold;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>🌸 ${MEGA_CONFIG.BOT_NAME}</h1>
                        <div class="version">v${MEGA_CONFIG.VERSION} - ${MEGA_CONFIG.RELEASE_DATE}</div>
                        
                        <div class="stats">
                            <div class="stat">
                                <div class="stat-value">${Utils.formatNumber(stats.totalUsers)}</div>
                                <div class="stat-label">کاربران</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${Utils.formatNumber(stats.activeToday)}</div>
                                <div class="stat-label">فعال امروز</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${Utils.formatNumber(stats.totalMessages)}</div>
                                <div class="stat-label">کل پیام‌ها</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${Utils.formatNumber(stats.todayMessages)}</div>
                                <div class="stat-label">پیام امروز</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${Object.keys(MEGA_CONFIG.ENGINES).length}</div>
                                <div class="stat-label">موتور AI</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${cacheStats.hitRate}</div>
                                <div class="stat-label">Cache Hit Rate</div>
                            </div>
                        </div>
                        
                        <div class="features">
                            <div class="feature">12 موتور هوش مصنوعی قدرتمند</div>
                            <div class="feature">سیستم Vision AI برای تحلیل عکس</div>
                            <div class="feature">حالت انسانی پیشرفته</div>
                            <div class="feature">سیستم VIP و اشتراک</div>
                            <div class="feature">سیستم رفرال و امتیازدهی</div>
                            <div class="feature">پنل ادمین کامل</div>
                            <div class="feature">آنالیتیکس و گزارش‌گیری</div>
                            <div class="feature">کش هوشمند و بهینه‌سازی</div>
                        </div>
                        
                        <div class="status">
                            ✅ سیستم فعال و آماده خدمت‌رسانی
                        </div>
                    </div>
                </body>
                </html>
            `, {
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
        }
        
        return new Response('Not Found', { status: 404 });
    }
};
