<?php

// ----- CONFIGURATION ------------------------------------------------------------------------

$consumer_key = '8TXqOjytFwo0izbwOVhzA';
$consumer_secret = 'cOcURA66wofrtFdCPsQ19cIVkh3MzxxT1m0U514KNcc';
$access_token = '1427423114-BTjC0bIk1lag1AuWqAW1J7KNBKCir2FFClPNdbq';
$access_tokensecret = 'QrUgvG0oQ4XDZ9ePsJWm71qPc09xY4WyNEG2zA54';

//---------------------------------------------------------------------------------------------



require_once('twitteroauth/twitteroauth.php');

function twitter_get_tweets($twitteruser){

    global $consumer_key, $consumer_secret, $access_token, $access_tokensecret;

    $cache = get_cache();

    if(is_array($cache)&&array_key_exists($twitteruser, $cache)){
        echo json_encode($cache[$twitteruser]);
        return;
    }

    if(empty($consumer_key)||empty($consumer_secret)||empty($access_token)||empty($access_tokensecret)){
        echo 'Twitter is not configured.';
        return;
    }

    $connection = getConnectionWithaccess_token($consumer_key, $consumer_secret, $access_token, $access_tokensecret);
    $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser);

    if(!is_array($cache))
        $cache = array();
    $cache[$twitteruser] = $tweets;
    set_cache($cache,60);

    echo json_encode($tweets);
}

function getConnectionWithaccess_token($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
    $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
    return $connection;
}

function linkify($status_text){
  $status_text = preg_replace(
    '/(https?:\/\/\S+)/',
    '<a href="\1">\1</a>',
    $status_text
  );
  $status_text = preg_replace(
    '/(^|\s)@(\w+)/',
    '\1@<a href="http://twitter.com/\2">\2</a>',
    $status_text
  );
  $status_text = preg_replace(
    '/(^|\s)#(\w+)/',
    '\1#<a href="http://search.twitter.com/search?q=%23\2">\2</a>',
    $status_text
  );
  return $status_text;
}

function get_cache(){
    if(file_exists('twitter.txt')){
        $file = file_get_contents('twitter.txt');
        if($file!==false&&$file!==''){
            $data = unserialize($file);
            $time = time();
            if($data['time']+$data['expire']>$time){
                return $data['data'];}
            file_put_contents('twitter.txt', '');
        }
    }
}

function set_cache($arr,$expire){
    if(file_exists('twitter.txt')){
        $file = file_get_contents('twitter.txt');
        $data = unserialize($file);
    }else
        $data = array();
    $data['time'] = time();
    $data['expire'] = $expire;
    $data['data'] = $arr;
    $file = serialize($data);
    file_put_contents('twitter.txt', $file);
}

if(isset($_GET['user']))
    twitter_get_tweets($_GET['user']);