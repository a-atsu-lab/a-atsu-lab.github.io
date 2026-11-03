/* =========================================================
   リンク一覧ファイル（ポータルの中身はすべてここで決まります）
   ---------------------------------------------------------
   ・editor.html（リンク編集ツール）を使うと、フォームで
     追加・編集してこのファイルを書き出せます。
   ・直接書き換える場合は、APPS の { ... } を1つコピーして
     中身を変えるだけでOKです（最後の , を忘れずに）。
   最終更新: 2026-11-03
   ========================================================= */

// サイト全体の設定
const SITE = {
  title: "情報科 アプリのひろば",
  subtitle: "授業で使うWebアプリをまとめました。気になるものから開いてみよう！",
  footer: "情報科",
  newDays: 30 // 追加日からこの日数のあいだ「NEW」マークを表示
};

// カテゴリ（絞り込みボタンになります。color はカードの色）
const CATEGORIES = [
  { name: "情報Ⅰ", color: "#3B82C4" },
  { name: "プログラミング", color: "#E8833A" },
  { name: "共通テスト対策", color: "#3E9B6B" },
  { name: "その他", color: "#8A6FC2" }
];

// アプリ一覧（上から順に表示されます）
//   title       : アプリ名
//   url         : リンク先
//   description : ひとこと説明
//   category    : 上の CATEGORIES の name のどれか
//   icon        : 絵文字1つ
//   added       : 追加日（"2026-11-02" の形。NEWマークに使います。空でもOK）
const APPS = [
  {
    title: "データ運びゲーム",
    url: "https://a-atsu-lab.github.io/chache-game.html",
    description: "キャッシュメモリへのヒット率を実感するゲームです。",
    category: "情報Ⅰ",
    icon: "📚",
    added: "2026-11-03"
  },
  {
    title: "CPUシミュレーター",
    url: "https://a-atsu-lab.github.io/cpu-simulator.html",
    description: "CPUの動きを試せます。",
    category: "情報Ⅰ",
    icon: "📚",
    added: "2026-11-03"
  },
  {
    title: "論理回路シミュレーター",
    url: "https://a-atsu-lab.github.io/logic-circuit-simulator.html",
    description: "論理回路を作るアプリです。",
    category: "情報Ⅰ",
    icon: "💻",
    added: "2026-11-03"
  },
  {
    title: "センサロボ・チャレンジ",
    url: "https://a-atsu-lab.github.io/sensor-robo.html",
    description: "ビジュアルプログラミングのアプリです。",
    category: "情報Ⅰ",
    icon: "💻",
    added: "2026-11-02"
  },
  {
    title: "pystep",
    url: "https://a-atsu-lab.github.io/pystep.html",
    description: "Pythonの学習アプリです。Pythonだけでなく、共通テスト用の言語表記やフローチャートも表示できます。",
    category: "情報Ⅰ",
    icon: "💻",
    added: "2026-11-03"
  },
  {
    title: "自販機ラボ",
    url: "https://a-atsu-lab.github.io/vending-machine.html",
    description: "自販機の故障を修理するというストーリーのプログラミング教材です。Pythonモードと共通テスト用言語モードがあります。共通テスト用でやってみてもいいと思います。（※授業では扱っていません）",
    category: "情報Ⅰ",
    icon: "💻",
    added: "2026-11-03"
  },
  {
    title: "プロトメーカー",
    url: "https://a-atsu-lab.github.io/protomaker.html",
    description: "アプリの企画・デザインをして、AIへの指示文書を作成できるアプリです。",
    category: "プログラミング",
    icon: "💻",
    added: "2026-11-03"
  }
];
