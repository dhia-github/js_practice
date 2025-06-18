// ==UserScript==
// @name         青山皮膚科　予約自動化
// @namespace    http://tampermonkey.net/
// @version      2025-06-16
// @description  try to take over the world!
// @author       You
// @match        https://park.paa.jp/park2/clinics/1188/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ---- 設定 ----
  // 1. フォームに入力したい情報をオブジェクトの配列にまとめる
  const itemsToFill = [
    { selector: 'input[placeholder="名前"]', value: '上坂すみれ', type: 'text' },
    { selector: 'input[placeholder="診察券番号"]', value: '12345', type: 'text' },
    { selector: 'input[placeholder="電話番号"]', value: '09012345678', type: 'text' },
    { selector: 'div.pure-u-1-1 > select.pure-u-1-1', value: 2003, type: 'select' }, //  年
    { selector: 'div.pure-u-1-2 > select.pure-u-11-12', value: 9, type: 'select' }, //  月
    { selector: 'div.pure-u-1-2 > select.pure-u-1-1', value: 9, type: 'select' }, //  日
    { selector: '#consent-checkbox', value: true, type: 'checkbox' },
  ];
  const timeout = 400; // 各要素を待つ時間
  //------------------------------------------------------------------------------------

  //最初のリンククリック
  clickFirstLink();

  //次のボタンクリック
  clickNextButton();

  //フォーム・チェックボックス・セレクタを埋める
  fillForm(); //returnがない

  //次のボタンクリック
  clickNextButton();

  //------------------------------------------------------------------------------
  //最初のリンククリック
  function clickFirstLink() {
    // ページ内に「最初のリンク」があるか探す
    const firstLink = document.querySelector('.ipk-wrap-primary-link a');
    if (firstLink) {
      console.log('ステップ1のリンクを検出。クリックします。');
      firstLink.click();
      return; // このページの処理はここで終了
    }
  }

  //次のボタンクリック
  function clickNextButton() {
    // ページ内に次へのボタンがあるか探す
    let nextButton = document.querySelector('.ipk-primary-btn.pure-button');
    if (nextButton) {
      nextButton.click();
      return;
    }
  }

  function clickCheckBox() {
    //checkboxをクリック
    const checkbox = document.querySelector('#consent-checkbox');
    // 要素が見つかり、かつ、まだチェックが入っていない場合にクリックします
    if (checkbox && !checkbox.checked) {
      console.log('チェックボックスが見つかりました。クリックします。');
      checkbox.click();
    } else {
      console.log('チェックボックスが見つからないか、すでにチェックされています。');
    }
  }

  //フォーム埋めの関数群
  async function fillForm() {
    console.log('自動入力を開始します。');

    // 3. ループを使って、設定した項目を一つずつ処理する
    for (const item of itemsToFill) {
      console.log(`「${item.selector}」を探しています...`);

      // 各要素が表示されるまで、ちゃんと待つ
      const element = await waitForElement(item.selector, timeout);

      if (element) {
        console.log(' -> 見つかりました。入力します。');
        //チェックボックスならば
        if (element.type === 'checkbox') {
          // 要素が見つかり、かつ、まだチェックが入っていない場合にクリックします
          if (element.checked !== item.value) {
            console.log('チェックボックスが見つかりました。クリックします。');
            element.click();
          } else {
            console.log('チェックボックスが見つからないか、すでにチェックされています。');
          }
        } else if (item.type === 'select') {
          // ★★★ ここからがセレクトボックスの処理 ★★★
          if (element.value !== item.value) {
            fillReactChange(element, item.value); // 入力とイベント発火
          } else {
            console.log(` -> すでに正しい値が選択されています。`);
          }
        } else {
          //入力フォーム(テキスト)
          fillReactInput(element, item.value); // 入力とイベント発火
        }
      } else {
        console.log(` -> 見つかりませんでした（タイムアウト）。`);
      }
    } // forの終わり

    console.log('すべての入力処理が完了しました。');
  }

  // --- 再利用する関数たち ---
  /**
   * 指定された要素が表示されるまで待機し、見つかったらその要素を返す関数
   * @param {string} selector - CSSセレクタ
   * @param {number} timeout - タイムアウトまでの時間 (ミリ秒)
   * @returns {Promise<Element|null>} 発見した要素、またはタイムアウト時にnull
   */
  function waitForElement(selector, timeout = 400) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(intervalId);
          resolve(element);
        }
      }, 100); // 0.1秒ごとにチェック

      setTimeout(() => {
        clearInterval(intervalId);
        resolve(null); // タイムアウト
      }, timeout);
    });
  }

  /**
   * input要素に値を入力し、Reactに更新を認識させるためのイベントを発火させる関数
   * @param {Element} element - 対象のinput要素
   * @param {string} value - 入力する値
   */
  function fillReactInput(element, value) {
    element.value = value;
    const event = new Event('input', { bubbles: true });
    element.dispatchEvent(event);
    console.log(`「${value}」を ${element.placeholder} に入力しました。`);
  }

  function fillReactChange(element, value) {
    element.value = value;
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
    console.log(`「${value}」を入力しました。`);
  }
})();
