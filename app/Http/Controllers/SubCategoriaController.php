<?php

namespace App\Http\Controllers;

use App\Models\SubCategoria;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCategoriaController extends Controller
{


    public function index()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        return Inertia::render('SubCategorias/Index', [
            'actividades_economicas' => $actividades_economicas,
        ]);
    }


    public function create()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 1)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();
        return Inertia::render('SubCategorias/Crear', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
        ]);
    }


    public function store(Request $request)
    {
        $subcategoria = new SubCategoria();

        $exists = SubCategoria::find(intval($request->codigo));

        if($exists) {
            dd("here");
            return redirect(route('actividad-economica.index'));
        }

        $subcategoria->id = intval($request->codigo);
        $subcategoria->nombre = $request->nombre;
        $subcategoria->tipo_categoria = $request->tipo_categoria;


        if(isset($request->sector) && $request->sector != "") {
            $subcategoria->id_padre_sub_categoria = intval($request->sector);
        }

        if(isset($request->segmento) && $request->segmento != "") {
            $subcategoria->id_padre_sub_categoria = intval($request->segmento);
        }
        
        try {
            $subcategoria->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        return redirect(route('actividad-economica.index'));
    }


    public function show(SubCategoria $actividad_economica)
    {
        //
    }


    public function edit(SubCategoria $actividad_economica)
    {
        return Inertia::render('SubCategorias/Editar', [
            'actividad_economica' => $actividad_economica,
        ]);
    }


    public function update(Request $request, SubCategoria $actividad_economica)
    {
        //$this->authorize('update', $actividades_economicas);
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'descripcion' => 'max:255',
            'periodo' => 'required',
            'valor_cuenta_adicional' => 'integer',
        ]);

        $actividad_economica->update($validated);
        return redirect(route('actividad-economica.index'));
    }


    public function destroy(SubCategoria $actividad_economica)
    {
        $actividad_economica->delete();
        return redirect(route('actividad-economica.index'));
    }


    public function status($id)
    {
        $actividades_economicas = SubCategoria::find($id);

        if ($actividades_economicas->estado == "Activo") {
            $actividades_economicas->estado = "Inactivo";
        } else {
            $actividades_economicas->estado = "Activo";
        }
        $actividades_economicas->save();
        return redirect(route('actividad-economica.index'));
    }
}