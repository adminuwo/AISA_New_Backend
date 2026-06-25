export const Verification_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - AISA™</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #5555ff;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 30px 25px;
            color: #333;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #333;
        }
        .verification-code {
            display: block;
            margin: 25px 0;
            font-size: 32px;
            color: #5555ff;
            background: #f0f0ff;
            border: 2px dashed #5555ff;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            font-weight: bold;
            letter-spacing: 4px;
            font-family: 'Courier New', monospace;
        }
        .info-text {
            font-size: 15px;
            color: #555;
            margin: 15px 0;
        }
        .expiry-notice {
            background-color: #fff9e6;
            border-left: 4px solid #ffcc00;
            padding: 12px 15px;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 14px;
            color: #666;
        }
        .security-note {
            margin-top: 25px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
            font-size: 13px;
            color: #666;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        .footer p {
            margin: 5px 0;
        }
        .footer a {
            color: #5555ff;
            text-decoration: none;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔐 Verify Your Email</h1>
        </div>
        <div class="content">
            <p class="greeting">Hello {name},</p>
            <p class="info-text">
                Thank you for signing up with AISA™! To complete your registration, please verify your email address using the code below:
            </p>
            <span class="verification-code">{verificationCode}</span>
            <div class="expiry-notice">
                ⏱️ This verification code will expire in 15 minutes for security purposes.
            </div>
            <p class="info-text">
                Simply enter this code on the verification page to activate your account and start chatting with AISA™.
            </p>
            <div class="security-note">
                <strong>🛡️ Security Notice:</strong> If you did not create an account with AISA™, please disregard this email. No further action is required, and your email address will not be used.
            </div>
        </div>
        <div class="footer">
            <p><strong>AISA™</strong> - Your Intelligent AI Chat Assistant</p>
            <p>&copy; ${new Date().getFullYear()} AISA™. All rights reserved.</p>
            <p>Need help? Contact us at <a href="mailto:support@aimall.com">support@aimall.com</a></p>
        </div>
    </div>
</body>
</html>
`;

export const Welcome_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to AISA™</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f5;
            color: #1f2937;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            border: 1px solid #e5e7eb;
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.025em;
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-message {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 20px;
            color: #111827;
        }
        .intro-text {
            font-size: 15px;
            color: #4b5563;
            margin-bottom: 25px;
        }
        .section-divider {
            border: 0;
            border-top: 1px solid #e5e7eb;
            margin: 30px 0;
        }
        .features-title {
            font-size: 16px;
            font-weight: 700;
            color: #111827;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 20px;
        }
        .feature-item {
            margin-bottom: 20px;
            display: flex;
            align-items: flex-start;
        }
        .feature-icon {
            font-size: 20px;
            margin-right: 12px;
            line-height: 1;
        }
        .feature-text {
            font-size: 15px;
        }
        .feature-text strong {
            color: #111827;
        }
        .feature-text p {
            margin: 4px 0 0;
            color: #4b5563;
            font-size: 14px;
        }
        .steps-container {
            background-color: #f9fafb;
            border-radius: 8px;
            padding: 24px;
            border: 1px solid #f3f4f6;
        }
        .step-item {
            margin-bottom: 12px;
            font-size: 15px;
            color: #374151;
        }
        .step-item:last-child {
            margin-bottom: 0;
        }
        .button {
            display: inline-block;
            padding: 14px 32px;
            background-color: #2563eb;
            color: white !important;
            text-decoration: none;
            border-radius: 8px;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            margin: 30px 0;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
        .quote-box {
            background-color: #f3f4f6;
            border-left: 4px solid #9ca3af;
            padding: 16px 20px;
            font-style: italic;
            font-size: 14px;
            color: #4b5563;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #f9fafb;
            padding: 30px 20px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            margin: 6px 0;
        }
        .footer a {
            color: #2563eb;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome to AISA™</h1>
            <p>India's AI Super Assistant for Work, Business & Life</p>
        </div>
        <div class="content">
            <p class="welcome-message">Hello {name},</p>
            <p class="intro-text">
                You now have access to a growing ecosystem of AI-powered assistants designed to save time, improve productivity, and help you achieve more every day.
            </p>

            <hr class="section-divider" />

            <h3 class="features-title">🚀 Explore the AISA™ Ecosystem</h3>
            
            <div class="feature-item">
                <span class="feature-icon">⚖️</span>
                <div class="feature-text">
                    <strong>AI Legal™</strong>
                    <p>Draft Notices, Agreements, Affidavits, FIRs and legal documents.</p>
                </div>
            </div>

            <div class="feature-item">
                <span class="feature-icon">📊</span>
                <div class="feature-text">
                    <strong>AI Cashflow™</strong>
                    <p>Plan cash flow, analyze finances and make smarter decisions.</p>
                </div>
            </div>

            <div class="feature-item">
                <span class="feature-icon">📢</span>
                <div class="feature-text">
                    <strong>AI Ads™</strong>
                    <p>Generate marketing campaigns, ad copies and social media content.</p>
                </div>
            </div>

            <div class="feature-item">
                <span class="feature-icon">💬</span>
                <div class="feature-text">
                    <strong>AISA Connect™</strong>
                    <p>Automate WhatsApp conversations and customer engagement.</p>
                </div>
            </div>

            <div class="feature-item">
                <span class="feature-icon">🛒</span>
                <div class="feature-text">
                    <strong>AI Mall™</strong>
                    <p>Discover powerful AI tools from around the world.</p>
                </div>
            </div>

            <hr class="section-divider" />

            <h3 class="features-title">🎯 Start Here</h3>
            <div class="steps-container">
                <div class="step-item"><strong>Step 1 →</strong> Complete your profile</div>
                <div class="step-item"><strong>Step 2 →</strong> Explore AI Legal™</div>
                <div class="step-item"><strong>Step 3 →</strong> Start your first AI conversation</div>
                <div class="step-item"><strong>Step 4 →</strong> Invite friends and earn bonus credits</div>
            </div>

            <hr class="section-divider" />

            <h3 class="features-title">🎁 Early Access Benefits</h3>
            <p class="intro-text" style="margin-bottom: 10px;">As an early AISA™ user, you'll receive:</p>
            <div class="feature-item" style="margin-bottom: 10px;">
                <span class="feature-icon">✨</span>
                <div class="feature-text">Access to upcoming AI features</div>
            </div>
            <div class="feature-item" style="margin-bottom: 10px;">
                <span class="feature-icon">✨</span>
                <div class="feature-text">Premium tools and exclusive launch offers</div>
            </div>
            <div class="feature-item" style="margin-bottom: 10px;">
                <span class="feature-icon">✨</span>
                <div class="feature-text">Priority access to new products</div>
            </div>

            <hr class="section-divider" />

            <div class="quote-box">
                “AISA is not just an AI assistant. It is your personal AI operating system.”
            </div>

            <div style="text-align: center;">
                <a href="{dashboardUrl}" class="button">🚀 Launch AISA</a>
            </div>

            <p class="intro-text" style="text-align: center; margin-top: 30px; font-size: 14px;">
                Need help? Our team is always here to support you.
            </p>
        </div>
        <div class="footer">
            <p><strong>UWO™</strong> - Building Intelligent Systems for Humanity</p>
            <p>&copy; 2026 UWO™. All rights reserved.</p>
            <p>
                <a href="https://aisa24.com">aisa24.com</a>
            </p>
        </div>
    </div>
</body>
</html>
`;


export const Reset_Password_OTP_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - AISA™</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #FF5733;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 30px 25px;
            color: #333;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #333;
        }
        .otp-code {
            display: block;
            margin: 25px 0;
            font-size: 32px;
            color: #FF5733;
            background: #fff5f2;
            border: 2px dashed #FF5733;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            font-weight: bold;
            letter-spacing: 6px;
            font-family: 'Courier New', monospace;
        }
        .info-text {
            font-size: 15px;
            color: #555;
            margin: 15px 0;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔒 Reset Your Password</h1>
        </div>
        <div class="content">
            <p class="greeting">Hello {name},</p>
            <p class="info-text">
                We received a request to reset your password. Use the following OTP code to proceed with the reset:
            </p>
            <span class="otp-code">{otpCode}</span>
            <p class="info-text">
                This code is valid for 15 minutes. If you did not request a password reset, please ignore this email.
            </p>
        </div>
        <div class="footer">
            <p><strong>AISA™</strong> - Secure & Intelligent AI Chat</p>
        </div>
    </div>
</body>
</html>
`;

export const Reset_Password_Email_Template = `
<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Reset Your Password - AISA™</title>
                        <style>
                            body {
                                font - family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                            color: #333;
                            line-height: 1.6;
        }
                            .container {
                                max - width: 600px;
                            margin: 30px auto;
                            background: #ffffff;
                            border-radius: 8px;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                            overflow: hidden;
                            border: 1px solid #ddd;
        }
                            .header {
                                background - color: #FF5733;
                            color: white;
                            padding: 30px 20px;
                            text-align: center;
        }
                            .header h1 {
                                margin: 0;
                            font-size: 26px;
                            font-weight: bold;
        }
                            .content {
                                padding: 30px 25px;
        }
                            .button {
                                display: inline-block;
                            padding: 14px 30px;
                            margin: 25px 0;
                            background-color: #FF5733;
                            color: white;
                            text-decoration: none;
                            border-radius: 6px;
                            text-align: center;
                            font-size: 16px;
                            font-weight: 600;
                            transition: background-color 0.3s;
        }
                            .button:hover {
                                background - color: #E64A19;
        }
                            .footer {
                                background - color: #f4f4f4;
                            padding: 20px;
                            text-align: center;
                            color: #777;
                            font-size: 12px;
                            border-top: 1px solid #ddd;
        }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>🔒 Reset Your Password</h1>
                            </div>
                            <div class="content">
                                <p>Hello {name},</p>
                                <p>We received a request to reset your password for your AISA™ account. Click the button below to proceed:</p>
                                <div style="text-align: center;">
                                    <a href="{resetUrl}" class="button">Reset Password</a>
                                </div>
                                <p>If you didn't request a password reset, you can safely ignore this email.</p>
                            </div>
                            <div class="footer">
                                <p><strong>AISA™</strong> - Secure & Intelligent AI Chat</p>
                            </div>
                        </div>
                    </body>
                </html>
                `;

export const Password_Change_Success_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Changed Successfully - AISA™</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); overflow: hidden; border: 1px solid #ddd; }
        .header { background-color: #28a745; color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 26px; font-weight: bold; }
        .content { padding: 30px 25px; }
        .footer { background-color: #f4f4f4; padding: 20px; text-align: center; color: #777; font-size: 12px; border-top: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Password Changed</h1>
        </div>
        <div class="content">
            <p>Hello {name},</p>
            <p>Your password for AISA™ has been successfully updated.</p>
            <p>If you did not make this change, please contact our support team immediately.</p>
        </div>
        <div class="footer">
            <p><strong>AISA™</strong> - Secure & Intelligent AI Chat</p>
        </div>
    </div>
</body>
</html>
`;


// Helper function to replace placeholders in templates
export const renderEmailTemplate = (template, data) => {
    let rendered = template;

    // Replace all placeholders with actual data
    Object.keys(data).forEach(key => {
        const placeholder = new RegExp(`{${key}}`, 'g');
        rendered = rendered.replace(placeholder, data[key] || '');
    });

    return rendered;
};

// Helper function to create plain text version (Important for spam prevention!)
export const stripHTMLToText = (html) => {
    return html
        .replace(/<style[^>]*>.*?<\/style>/gi, '')
        .replace(/<script[^>]*>.*?<\/script>/gi, '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
};

// Usage Examples:
/*
// Verification Email
const verificationEmail = renderEmailTemplate(Verification_Email_Template, {
    name: 'John Doe',
    verificationCode: '123456'
});

// Welcome Email
const welcomeEmail = renderEmailTemplate(Welcome_Email_Template, {
    name: 'John Doe',
    dashboardUrl: 'https://aimall.com/dashboard',
    unsubscribeUrl: 'https://aimall.com/unsubscribe',
    privacyUrl: 'https://aimall.com/privacy',
    termsUrl: 'https://aimall.com/terms'
});

// Create plain text version
const plainText = stripHTMLToText(welcomeEmail);
*/