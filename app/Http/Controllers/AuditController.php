<?php

namespace App\Http\Controllers;

use App\Audit;
use App\filters\AuditFilter;
use App\Report\AuditsReport;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    public function view(Audit $model)
    {
        $model->load(['user.permissions']);
        return api()->data('model' , $model)->build();
    }

    public function timeline(AuditFilter $f)
    {
        return api()
            ->data('audits' , Audit::filter($f)->with(['user'])->paginate(request('size') ?? 30 ))
            ->data('statistics' , [])
            ->build();
    }
}
