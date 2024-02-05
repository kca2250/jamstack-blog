import { HeadMeta } from "@/components/headMeta";

export default function About() {
  return (
    <>
      <HeadMeta
        title="About Me"
        description="biiigrrrの中の人の自己紹介です"
        type="website"
        url=""
        imageUrl=""
      />
      <article>
        <h1>About Me | kca2250について</h1>
        <h2>このブログについて</h2>
        <p>
          このブログのメインコンテンツはフロントエンドについてですが、なかの人の趣味についても書かれています。
        </p>
        <h2>簡単な自己紹介</h2>
        <p>生まれと育ちは大阪で、京都在住。</p>
        <p>
          ReactやNext.jsを用いて業務をこなしています。
          得意分野はコーディングはもちろん、最新情報や技術的に興味のある事柄へのアンテナが敏感であるというところです。
        </p>
        <h3>技術スタック</h3>
        <p>業務で利用したことのあるもののみ抜粋しています。</p>
        <h4>Programming Language.</h4>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Dart</li>
        </ul>
        <h4>Framework</h4>
        <ul>
          <li>React</li>
          <li>Next.js（App Routerは触っていません）</li>
          <li>React Native（Bare, Expoともに）</li>
          <li>Flutter</li>
        </ul>
        <h2>簡単な経歴</h2>
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>2017 ~ 2021.3</td>
              <td>行政系の事務所へ新卒で就職</td>
            </tr>
            <tr>
              <td>2021.4 ~ 2021.12</td>
              <td>休職、退職（精神的に疲弊したため）</td>
            </tr>
            <tr>
              <td>2022.1 ~ 現在</td>
              <td>某金融系企業フロントエンドエンジニア</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}
