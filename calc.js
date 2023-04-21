<!DOCTYPE html>
<html lang="ja">
<!-- 2023/4/21 関根作成。人員の変更があったら名前を置換してリユース -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>税抜き計算ツール</title>
    <script>
        // 数字を計算する関数
        function calculate() {
            // 入力フィールドのIDの配列
            const inputs = ['A', 'B', 'C', 'D', 'E'];
            // 結果を格納するための文字列
            let result = '■それぞれの税抜金額' + '\n';
            // 入力された値の合計
            let originalSum = 0;
            // 計算後の値の合計
            let calculatedSum = 0;

            // 各入力フィールドに対して処理を行う
            for (const input of inputs) {
                // 入力値を数値に変換
                const value = parseFloat(document.getElementById(input).value);
                // 入力が無効な場合
                if (isNaN(value)) {
                    result += input + ': なし\n';
                } else {
                    // 値を1.1で割る
                    const calculatedValue = Math.round(value / 1.1);
                    result += input + ': ' + calculatedValue.toFixed(2) + '円\n';
                    // 合計に加算
                    originalSum += value;
                    calculatedSum += calculatedValue;
                }
            }

            // 合計を結果に追加
            result += '\n■元の金額の合計: ' + originalSum.toFixed(2) + '円\n';
            result += '■計算後の金額の合計: ' + calculatedSum.toFixed(2)+ '円\n';

            // 結果を出力エリアに表示
            document.getElementById('output').value = result;
        }
    </script>
</head>
<body>
    <h1>数字計算</h1>
    <!-- 入力エリアA -->
    <div>
        <label for="A">A: </label>
        <input type="text" id="A">
    </div>
    <!-- 入力エリアB -->
    <div>
        <label for="B">B: </label>
        <input type="text" id="B">
    </div>
    <!-- 入力エリアC -->
    <div>
        <label for="C">C: </label>
        <input type="text" id="C">
    </div>
    <!-- 入力エリアD -->
    <div>
        <label for="D">D: </label>
        <input type="text" id="D">
    </div>
    <!-- 入力エリアE -->
    <div>
        <label for="E">E: </label>
        <input type="text" id="E">
    </div>
    <!-- 計算ボタン -->
    <button onclick="calculate()">計算</button>
    <!-- 出力エリア -->
    <h2>出力:</h2>
    <textarea id="output" rows="10" cols="30" readonly></textarea>
</body>
</html>
