player1 = localStorage.getItem("player1key");
player2 = localStorage.getItem("player2key");
player1score = 0;
player2score = 0;

document.getElementById("player1").innerHTML = player1 + ":";
document.getElementById("player2").innerHTML = player2 + ":";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question turn : " + player1;
document.getElementById("player_answer").innerHTML = "Answer turn :  " + player2;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toUpperCase();
    console.log(word);
    charat1 = word.charAt(1);
    console.log(charat1);
    length_divide_2 = Math.floor(word.length/2);
    charat2 = word.charAt(length_divide_2);
    console.log(charat2);
    length_minus = word.length-1;
    charat3 = word.charAt(length_minus);
    console.log(charat3);

    remove_1 = word.replace(charat1,"_");
    remove_2 = remove_1.replace(charat2,"_");
    remove_3 = remove_2.replace(charat3,"_");
    console.log(remove_3);

    question_word = "<h4 id='word_display'>Q."+ remove_3 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";


}


question_turn = "player1";

answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;

    answer = get_answer.toUpperCase();

      if(answer == word)
      {
          if(answer_turn == "player1")
          {
              player1score = player1score+1;

              document.getElementById("player1score").innerHTML = player1score;
          }

          else{
              player2score = player2score+1;

              document.getElementById("player2score").innerHTML = player2score;
          }
      }

      if(question_turn == "player1")
      {
          question_turn = "player2";

          document.getElementById("player_question").innerHTML = "Question turn - "+ player2;
      }

      else
      {
          question_turn = "player1";

          document.getElementById("player_question").innerHTML = "Question turn - "+ player1;
      }

      if(answer_turn == "player1")
      {
          answer_turn = "player2";

          document.getElementById("player_answer").innerHTML = "Answer turn - "+ player2;
      }

      else{
          answer_turn = "player1";

          document.getElementById("player_answer").innerHTML = "Answer turn - "+ player1;
      }

      document.getElementById("output").innerHTML = "";
}

