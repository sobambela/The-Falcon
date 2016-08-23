<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Task;
use App\Repositories\TaskRepository;

class TaskController extends Controller
{
    /**
     * The task repository instance.
     *
     * @var TaskRepository
     */
    protected $tasks;

    /**
     * Create a new controller instance.
     *
     * @param  TaskRepository  $tasks
     * @return void
     */
    public function __construct(TaskRepository $tasks)
    {
//        $this->middleware('auth');

        $this->tasks = $tasks;
    }

    /**
     * Display a list of all of the user's task.
     *
     * @param  Request  $request
     * @return Response
     */
    public function index(Request $request)
    {
        return view('tasks.index', [
            'tasks' => $this->tasks->forUser($request->user()),
        ]);
    }

    /**
     * Create a new task.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        $request->user()->tasks()->create([
            'name' => $request->name,
        ]);

        return redirect('/tasks');
    }

    /**
     * Destroy the given task.
     *
     * @param  Request  $request
     * @param  Task  $task
     * @return Response
     */
    public function destroy(Request $request, Task $task)
    {
        $this->authorize('destroy', $task);

        $task->delete();

        return redirect('/tasks');
    }
    /**
     * Generate capt ha image.
     *
     * @param  Request  $request
     * @param  Task  $task
     * @return Response
     */
    public function captcha()
    {
	session_start();
	$code=rand(1000,9999);
	$_SESSION["code"]=$code;
	$im = imagecreatetruecolor(50, 24);
	$bg = imagecolorallocate($im, 22, 86, 165); //background color blue
	$fg = imagecolorallocate($im, 255, 255, 255);//text color white
	imagefill($im, 0, 0, $bg);
	imagestring($im, 5, 5, 5,  $code, $fg);
	header("Cache-Control: no-cache, must-revalidate");
	header('Content-type: image/png');
	imagepng($im);
	imagedestroy($im);
    }
    /**
     * Generate capt ha image.
     *
     * @param  Request  $request
     * @param  Task  $task
     * @return Response
     */
    public function book(Request $request)
    {
        

        $name =         $request->Name;
        $surname =      $request->Surname;
        $email =        $request->VerifyEmail;
        $cellnumber =   $request->Cellnumber;
        $tell =         $request->Tel;
        $skype =        $request->Skype;
        $area_of_interst = $request->Areas_Of_Interest;
        $no_nights =    $request->Number_Of_Nights;
        $no_guest =     $request->Number_Of_Guests;
        $no_rooms =     $request->Number_Of_Bedrooms;
        $total_budget = $request->Total_Budget;
        $tours =        $request->Tours;
        $transferes =   $request->Transfers;
        $additional_req = $request->Additional_Requirements;
        $country = $request->Country;
        $arival_date    =$request->Arrival_Date;
        $departure_date = $request->Departure_Date;

        $to      = 'sobambela@gmail.com';
        $subject = 'Enquiry from Travel Assist website';
        $message = '<html><body>';

        $message .= '<p>Below is an enuiry sent via the Travel Assist website:</p> ';

        $message .= '<p><strong>Name: </strong>'. $name.'</p> ';
        $message .= '<p><strong>Surname: </strong>'. $surname.'</p> ';
        $message .= '<p><strong>Email: </strong>'. $email.'</p> ';
        $message .= '<p><strong>Tel: </strong>'. $tell.'</p> ';
        $message .= '<p><strong>Town/Country: </strong>'. $country.'</p> ';
        $message .= '<p><strong>Arrival Date: </strong>'. $arival_date.'</p> ';
        $message .= '<p><strong>Depature Date: </strong>'. $departure_date.'</p> ';
        $message .= '<p><strong>Number of nights: </strong>'. $no_nights.'</p> ';
        $message .= '<p><strong>Number of guests: </strong>'. $no_guest.'</p> ';
        $message .= '<p><strong>Number of Bedrooms: </strong>'. $no_rooms.'</p> ';
        $message .= '<p><strong>Additional Requirements: </strong>'. $additional_req.'</p> ';

        $message .= '</html></body>';

        $headers = 'From: info@travelassist.capetown' .
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        if(mail($to, $subject, $message, $headers)){
            return redirect('/#home'); 
        }else{
            echo json_encode(['response' => 'mail_sent_error', 'msg' => 'Oops, something went wrong, Please try again']); 
        }  
    }
}
