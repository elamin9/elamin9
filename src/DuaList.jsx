import { useState } from "react";

const duas = [
  {
    category: "🕌 Spiritual",
    color: "#C9A84C",
    items: [
      "Forgive me for everything I've done wrong — what I remember and what I've forgotten",
      "Help me become a better Muslim consistently, not just during Ramadan",
      "Grant me a good, faithful end to my life",
      "Make this Ramadan a turning point, not just a month",
      "Let me witness many more Ramadans with a stronger heart"
    ]
  },
  {
    category: "💼 Work & Business",
    color: "#7EB8C9",
    items: [
      "Bless and grow my consulting business with barakah",
      "Grant success to my YouTube channel — let it benefit people and provide for me",
      "Bless my Substack and every word I publish",
      "Open the doors for a smooth transition to full entrepreneurship",
      "Give me the right clients, opportunities, and partnerships",
      "Remove every obstacle blocking my business growth"
    ]
  },
  {
    category: "🧠 Health & Mind",
    color: "#9B8EC4",
    items: [
      "Help me manage my ADHD with clarity and structure",
      "Grant me sustained energy, focus, and mental clarity while fasting",
      "Protect my physical and mental health as I juggle multiple responsibilities",
      "Give me deep, restful sleep in whatever hours I have",
      "Keep me emotionally balanced during this demanding season"
    ]
  },
  {
    category: "💰 Provision & Finance",
    color: "#5BAD8F",
    items: [
      "Increase my rizq (provision) in ways I can't plan for",
      "Remove financial stress and worry from my life",
      "Help me pay off debt and build real financial security",
      "Open income streams I haven't even thought of yet",
      "Let my skills and work be a source of continuous blessings"
    ]
  },
  {
    category: "👨‍👩‍👧 Family & Relationships",
    color: "#D4836A",
    items: [
      "Bless and protect my family in every way",
      "Strengthen the relationships that matter most to me",
      "Heal any broken or strained relationships in my life",
      "Grant my family good health, happiness, and faith",
      "Make me someone my family is proud of"
    ]
  },
  {
    category: "🌍 Community & Ummah",
    color: "#6B9E6B",
    items: [
      "Ease the suffering of Muslims around the world",
      "Grant relief to those in war, poverty, and hardship",
      "Unite the Muslim community with love and purpose",
      "Let me be someone who contributes positively to my community"
    ]
  }
];

const laylaDua = {
  arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
  transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
  translation: "O Allah, You are Pardoning, You love to pardon, so pardon me."
};

export default function DuaList() {
  const [checked, setChecked] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  const toggle = (cat, idx) => {
    const key = `${cat}-${idx}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = duas.reduce((sum, d) => sum + d.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0a0a0f 0%, #111118 50%, #0d0d14 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8dcc8",
      padding: "0 0 80px 0"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #1a1508 0%, transparent 100%)",
        borderBottom: "1px solid #C9A84C33",
        padding: "28px 20px 20px",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(12px)"
      }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#C9A84C", textTransform: "uppercase", marginBottom: 6 }}>
          Last 10 Nights
        </div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: "normal", color: "#f0e6cc", letterSpacing: 1 }}>
          My Ramadan Duas
        </h1>
        <div style={{ marginTop: 10, fontSize: 12, color: "#888" }}>
          {checkedCount} of {totalItems} covered tonight
        </div>
        <div style={{
          marginTop: 8,
          height: 3,
          background: "#1a1a1a",
          borderRadius: 2,
          overflow: "hidden",
          maxWidth: 200,
          margin: "8px auto 0"
        }}>
          <div style={{
            height: "100%",
            width: `${(checkedCount / totalItems) * 100}%`,
            background: "linear-gradient(90deg, #C9A84C, #f0c060)",
            borderRadius: 2,
            transition: "width 0.4s ease"
          }} />
        </div>
      </div>

      {/* Layla Dua Banner */}
      <div style={{
        margin: "20px 16px",
        background: "linear-gradient(135deg, #1a1408 0%, #211a08 100%)",
        border: "1px solid #C9A84C44",
        borderRadius: 12,
        padding: "18px 16px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#C9A84C", textTransform: "uppercase", marginBottom: 12 }}>
          ⭐ Night of Power Dua — Repeat Often
        </div>
        <div style={{ fontSize: 22, color: "#f0e6cc", lineHeight: 1.8, marginBottom: 10, direction: "rtl" }}>
          {laylaDua.arabic}
        </div>
        <div style={{ fontSize: 13, color: "#C9A84C", fontStyle: "italic", marginBottom: 6 }}>
          {laylaDua.transliteration}
        </div>
        <div style={{ fontSize: 12, color: "#999", lineHeight: 1.6 }}>
          {laylaDua.translation}
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        padding: "0 16px",
        gap: 8,
        marginBottom: 16,
        scrollbarWidth: "none"
      }}>
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            flexShrink: 0,
            padding: "7px 14px",
            borderRadius: 20,
            border: "1px solid",
            borderColor: activeCategory === null ? "#C9A84C" : "#333",
            background: activeCategory === null ? "#C9A84C22" : "transparent",
            color: activeCategory === null ? "#C9A84C" : "#666",
            fontSize: 12,
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}
        >
          All
        </button>
        {duas.map(d => (
          <button
            key={d.category}
            onClick={() => setActiveCategory(activeCategory === d.category ? null : d.category)}
            style={{
              flexShrink: 0,
              padding: "7px 14px",
              borderRadius: 20,
              border: "1px solid",
              borderColor: activeCategory === d.category ? d.color : "#333",
              background: activeCategory === d.category ? `${d.color}22` : "transparent",
              color: activeCategory === d.category ? d.color : "#666",
              fontSize: 12,
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {d.category}
          </button>
        ))}
      </div>

      {/* Dua Sections */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        {duas
          .filter(d => !activeCategory || d.category === activeCategory)
          .map(section => (
          <div key={section.category} style={{
            background: "#111116",
            border: `1px solid ${section.color}22`,
            borderRadius: 12,
            overflow: "hidden"
          }}>
            <div style={{
              padding: "14px 16px",
              borderBottom: `1px solid ${section.color}22`,
              background: `linear-gradient(90deg, ${section.color}11 0%, transparent 100%)`
            }}>
              <span style={{ fontSize: 15, color: section.color, fontWeight: "bold" }}>
                {section.category}
              </span>
            </div>
            <div style={{ padding: "8px 0" }}>
              {section.items.map((item, idx) => {
                const key = `${section.category}-${idx}`;
                const done = checked[key];
                return (
                  <div
                    key={idx}
                    onClick={() => toggle(section.category, idx)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 16px",
                      cursor: "pointer",
                      opacity: done ? 0.45 : 1,
                      transition: "opacity 0.2s"
                    }}
                  >
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: `1.5px solid ${done ? section.color : "#444"}`,
                      background: done ? section.color : "transparent",
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s"
                    }}>
                      {done && <span style={{ color: "#000", fontSize: 12, fontWeight: "bold" }}>✓</span>}
                    </div>
                    <span style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: done ? "#555" : "#ccc",
                      textDecoration: done ? "line-through" : "none",
                      transition: "all 0.2s"
                    }}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "32px 20px 0", color: "#444", fontSize: 12 }}>
        رمضان مبارك
        <div style={{ marginTop: 4, letterSpacing: 2 }}>Ramadan Mubarak</div>
      </div>
    </div>
  );
}
