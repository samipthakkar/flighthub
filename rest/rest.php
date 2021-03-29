<?php



$allowed_methods = array(
    'people',
    'planets',
    'starships'
);

class Apis{

    public static function people(){
        $curl = curl_init();
        $response_array =[];
        $i=0;
        do{
            $i++;
            curl_setopt_array($curl,[
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => 'https://swapi.dev/api/people/?page='.$i,
                CURLOPT_USERAGENT => 'Fetching People data'
            ]);
            array_push($response_array, json_decode(curl_exec($curl)));
            $j = intval(json_encode($response_array[0]->count));
        }
        while($i<ceil($j/10));
        echo json_encode($response_array);
        curl_close($curl);
    }

    public static function planets(){
        $curl = curl_init();
        $response_array =[]; 
        $i=0;
        do{
            $i++;
            curl_setopt_array($curl,[
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => 'https://swapi.dev/api/planets/?page='.$i,
                CURLOPT_USERAGENT => 'Fetching Planet data'
            ]);
            array_push($response_array, json_decode(curl_exec($curl)));
            $j = intval(json_encode($response_array[0]->count));
        }
        while($i<ceil($j/10));
        echo json_encode($response_array);
        curl_close($curl);
    }
    
    public static function starships(){
        $curl = curl_init();
        $response_array =[];
        $i=0;
        do{
            $i++;
            curl_setopt_array($curl,[
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => 'https://swapi.dev/api/starships/?page='.$i,
                CURLOPT_USERAGENT => 'Fetching Starship data'
            ]);
            array_push($response_array, json_decode(curl_exec($curl)));
            $j = intval(json_encode($response_array[0]->count));
        }
        while($i<ceil($j/10));
        echo json_encode($response_array);
        curl_close($curl);
    }
}
?>