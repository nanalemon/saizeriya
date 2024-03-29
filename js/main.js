'use strict';
{

  particlesJS("particles-js", {
    "particles":{
      "number":{
        "value":346,//この数値を変更すると星の数が増減できる
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#ffffff"
      },
      "shape":{
        "type":"circle",//形状はcircleを指定
        "stroke":{
          "width":0
        },
        },
      "opacity":{
        "value":1,//シェイプの透明度
        "random":true,//シェイプの透明度をランダムにする
        "anim":{
          "enable":true,//シェイプの透明度をアニメーションさせる
          "speed":3,//シェイプの透明度をアニメーションさせる
          "opacity_min":0,//透明度の最小値０
          "sync":false//全てを同時にアニメーションさせない
        }
      },
      "size":{
        "value":2,
        "random":true,
        "anim":{
          "enable":false,
          "speed":4,
          "size_min":0.3,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
        "speed":120,//この数値を小さくするとゆっくりな動きになる
      "direction":"none",//方向指定なし
      "random":true,//動きはランダムに
      "straight":true,//動きをとどめる
        "out_mode":"out",
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":600
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      }
    },
    "retina_detect":true
  });
  


// メニュー

const btn = document.getElementById('btn');
const menu = document.getElementById('menu');

btn.addEventListener('click',() => {
  const results = ['桜えびのアーリオ・オーリオ ( ランチ )','自家製ケチャップソースｓのナポリタン ( ランチ )','オニオンソースのハンバーグ ( ランチ )','スパイシートマトハンバーグ ( ランチ )','野菜カレーのドリア ( ランチ )','タラコとエビのドリア ( ランチ )','半熟卵のミラノ風ドリア ( ランチ )','小エビサラダの冷製カッペリーニ ( 季節限定 )','牛100%オニオンソースのハンバーグ','牛100%スパイシートマトハンバーグ','マルゲリータピザ＋ガーデンサラダ','ラムのランプステーキ','チキンのシーザーサラダ','小エビのサラダ','コーンクリームスープ','冷たいパンプキンスープ ( 季節限定 )','ガーリックトースト','爽やかにんじんサラダ','バッファローモッツァレラ','プロシュート','アスパラガスの温サラダ','ほうれん草のくたくた','柔らか青豆とペコリーノチーズの温サラダ','カリッとポテト','チョリソー','イタリア風もつ煮込み','辛味チキン','アロスティチーニ','エスカルゴのオーブン焼き＋セットプチフォッカ','煉獄のたまご','ムール貝のガーリック焼き','エビクリームグラタン','ソーセージピザ＋レフォールソース','タラコソースシシリー風','たっぷりペコリーノチーズのポモドーロ','ペンネアラビアータ','スパゲッティアラビアータ','ペペロンチーノ','たっぷりペコリーノチーズのカルボナーラ','半熟卵のミートソース ボロニア風','イカの墨入りスパゲッティ','ラムのラグーソース ( ペンネ )','ラムのラグーソース ( スパゲッティ )','エビとブロッコリーのオーロラソース','チーズたっぷりミラノ風ドリア','野菜と白いんげん豆の煮込み','ディアボラ風ハンバーグ','チョリソーとハンバーグの盛合せ','ポップコーンシュリンプとハンバーグの盛合せ','若鶏のディアボラ風','リブステーキ','アロスティチーニ Wサイズ','ティラミスクラシコ','とろっとパンナコッタ','フレンチトースト＋イタリアンジェラート','ジェラート＆シナモンプチフォッカ','トリフアイスクリーム','アマレーナ','すっきりレモンのシャーベット','チョコレートケーキ'];

  menu.textContent = results[Math.floor(Math.random() * results.length)];
});







}