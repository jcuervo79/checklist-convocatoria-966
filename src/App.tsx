import React, { useState, useEffect } from 'react';
import { Save, Download, Upload, Calendar, AlertCircle, CheckCircle2, Clock, FileText } from 'lucide-react';

const ChecklistConvocatoria966 = () => {
  const [formData, setFormData] = useState({
    generalInfo: {
      titulo: { estado: '', observaciones: '', fecha: '' },
      entidadEjecutora: { estado: '', observaciones: '', fecha: '' },
      investigadorPrincipal: { estado: '', observaciones: '', fecha: '' },
      empresaNacional: { estado: '', observaciones: '', fecha: '' },
      organizacionesLocales: { estado: '', observaciones: '', fecha: '' }
    },
    documentosIES: {
      anexo1: { estado: '', observaciones: '', fecha: '' },
      anexo3: { estado: '', observaciones: '', fecha: '' },
      anexo6: { estado: '', observaciones: '', fecha: '' },
      certificadoExistencia: { estado: '', observaciones: '', fecha: '' },
      categorizacionGrupo: { estado: '', observaciones: '', fecha: '' },
      evidenciaLineas: { estado: '', observaciones: '', fecha: '' },
      avalEtica: { estado: '', observaciones: '', fecha: '' },
      permisosAmbientales: { estado: '', observaciones: '', fecha: '' }
    },
    jovenesInvestigadores: {
      joven1: {
        anexo4: { estado: '', observaciones: '', fecha: '' },
        cedula: { estado: '', observaciones: '', fecha: '' },
        diploma: { estado: '', observaciones: '', fecha: '' },
        certificadoNotas: { estado: '', observaciones: '', fecha: '' },
        cvlac: { estado: '', observaciones: '', fecha: '' },
        verificacionEdad: { estado: '', observaciones: '', fecha: '' }
      },
      joven2: {
        anexo4: { estado: '', observaciones: '', fecha: '' },
        cedula: { estado: '', observaciones: '', fecha: '' },
        diploma: { estado: '', observaciones: '', fecha: '' },
        certificadoNotas: { estado: '', observaciones: '', fecha: '' },
        cvlac: { estado: '', observaciones: '', fecha: '' },
        verificacionEdad: { estado: '', observaciones: '', fecha: '' }
      }
    },
    doctorPosdoctoral: {
      titulo: { estado: '', observaciones: '', fecha: '' },
      cvlac: { estado: '', observaciones: '', fecha: '' },
      verificacionVinculo: { estado: '', observaciones: '', fecha: '' }
    },
    estudiantesMaestria: {
      estudiante1: {
        certificacionMatricula: { estado: '', observaciones: '', fecha: '' },
        cvlac: { estado: '', observaciones: '', fecha: '' }
      },
      estudiante2: {
        certificacionMatricula: { estado: '', observaciones: '', fecha: '' },
        cvlac: { estado: '', observaciones: '', fecha: '' }
      }
    },
    semillero: {
      anexo5: { estado: '', observaciones: '', fecha: '' },
      constitucion: { estado: '', observaciones: '', fecha: '' },
      certificados: { estado: '', observaciones: '', fecha: '' }
    },
    empresaNacionalDocs: {
      certificadoExistencia: { estado: '', observaciones: '', fecha: '' },
      anexo2: { estado: '', observaciones: '', fecha: '' },
      certificacionesProyectos: { estado: '', observaciones: '', fecha: '' },
      firmaAnexo1: { estado: '', observaciones: '', fecha: '' },
      verificacionAntiguedad: { estado: '', observaciones: '', fecha: '' }
    },
    organizacionesLocalesDocs: {
      org1: {
        certificadoCamara: { estado: '', observaciones: '', fecha: '' },
        certificacionConstitucion: { estado: '', observaciones: '', fecha: '' },
        firmaAnexo1: { estado: '', observaciones: '', fecha: '' },
        documentosEspecificos: { estado: '', observaciones: '', fecha: '' }
      }
    },
    contenidoTecnico: {
      identificacion: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      generalidades: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      componenteTecnico: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      componenteFormacion: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      componentePresupuestal: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      estrategiaApropiacion: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      cronograma: { desarrollo: '', revision: '', observaciones: '', fecha: '' },
      bibliografia: { desarrollo: '', revision: '', observaciones: '', fecha: '' }
    },
    verificacionTecnica: {
      coherenciaEjes: { estado: '', observaciones: '', fecha: '' },
      objetivosEspecificos: { estado: '', observaciones: '', fecha: '' },
      metodologia: { estado: '', observaciones: '', fecha: '' },
      resultadosEsperados: { estado: '', observaciones: '', fecha: '' },
      impactoTerritorial: { estado: '', observaciones: '', fecha: '' },
      apropiacionSocial: { estado: '', observaciones: '', fecha: '' },
      cronogramaRealista: { estado: '', observaciones: '', fecha: '' },
      presupuestoJustificado: { estado: '', observaciones: '', fecha: '' },
      contrapartidaMinima: { estado: '', observaciones: '', fecha: '' }
    },
    verificacionFinal: {
      documentosCompletos: { estado: '', responsable: '', fecha: '' },
      firmasCompletas: { estado: '', responsable: '', fecha: '' },
      vigenciasValidas: { estado: '', responsable: '', fecha: '' },
      consistenciaInfo: { estado: '', responsable: '', fecha: '' },
      propuestaTecnica: { estado: '', responsable: '', fecha: '' },
      talentoHumano: { estado: '', responsable: '', fecha: '' },
      alianzaEstrategica: { estado: '', responsable: '', fecha: '' }
    }
  });
  
  const [activeSection, setActiveSection] = useState('generalInfo');
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('checklist966Data');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      const savedTime = localStorage.getItem('checklist966LastSaved');
      if (savedTime) {
        setLastSaved(new Date(savedTime));
      }
    }
  }, []);

  const updateField = (section, subsection, field, property, value) => {
    const newFormData = { ...formData };
    if (subsection) {
      newFormData[section][subsection][field][property] = value;
    } else {
      newFormData[section][field][property] = value;
    }
    
    if (property === 'estado' || property === 'desarrollo' || property === 'revision') {
      const fechaProperty = 'fecha';
      if (subsection) {
        newFormData[section][subsection][field][fechaProperty] = new Date().toLocaleDateString();
      } else {
        newFormData[section][field][fechaProperty] = new Date().toLocaleDateString();
      }
    }
    
    setFormData(newFormData);
  };

  const saveData = () => {
    localStorage.setItem('checklist966Data', JSON.stringify(formData));
    const now = new Date();
    localStorage.setItem('checklist966LastSaved', now.toISOString());
    setLastSaved(now);
    alert('Datos guardados exitosamente');
  };

  const exportData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `checklist_966_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          setFormData(importedData);
          saveData();
          alert('Datos importados exitosamente');
        } catch (error) {
          alert('Error al importar el archivo. Verifique que sea un archivo JSON válido.');
        }
      };
      reader.readAsText(file);
    }
  };

  const getStatusIcon = (estado) => {
    switch (estado) {
      case 'completo':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'pendiente':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'na':
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const calculateStats = () => {
    let total = 0;
    let completo = 0;
    let pendiente = 0;
    
    const countFields = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          if (obj[key].estado !== undefined) {
            total++;
            if (obj[key].estado === 'completo') completo++;
            else if (obj[key].estado === 'pendiente') pendiente++;
          } else if (obj[key].desarrollo !== undefined) {
            total += 2;
            if (obj[key].desarrollo === 'completo') completo++;
            if (obj[key].revision === 'completo') completo++;
            if (obj[key].desarrollo === 'pendiente') pendiente++;
            if (obj[key].revision === 'pendiente') pendiente++;
          } else {
            countFields(obj[key]);
          }
        }
      }
    };
    
    countFields(formData);
    return { total, completo, pendiente, porcentaje: total > 0 ? Math.round((completo / total) * 100) : 0 };
  };

  const stats = calculateStats();

  const StatusField = ({ section, subsection = null, field, label, type = 'estado', required = true }) => {
    const fieldData = subsection ? formData[section]?.[subsection]?.[field] : formData[section]?.[field];
    
    if (!fieldData) return null;

    return (
      <div className="border rounded-lg p-3 bg-gray-50">
        <div className="flex items-center gap-2 mb-2">
          {getStatusIcon(type === 'estado' ? fieldData.estado : fieldData.desarrollo)}
          <label className="text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
        
        {type === 'estado' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <select
              value={fieldData.estado || ''}
              onChange={(e) => updateField(section, subsection, field, 'estado', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">Seleccionar</option>
              <option value="completo">Completo</option>
              <option value="pendiente">Pendiente</option>
              <option value="na">N/A</option>
            </select>
            <input
              type="text"
              placeholder="Fecha"
              value={fieldData.fecha || ''}
              onChange={(e) => updateField(section, subsection, field, 'fecha', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Responsable"
              value={fieldData.responsable || ''}
              onChange={(e) => updateField(section, subsection, field, 'responsable', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        )}
        
        {type === 'desarrollo' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
            <select
              value={fieldData.desarrollo || ''}
              onChange={(e) => updateField(section, subsection, field, 'desarrollo', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">Desarrollo</option>
              <option value="completo">Desarrollado</option>
              <option value="pendiente">Pendiente</option>
            </select>
            <select
              value={fieldData.revision || ''}
              onChange={(e) => updateField(section, subsection, field, 'revision', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">Revisión</option>
              <option value="completo">Revisado</option>
              <option value="pendiente">Pendiente</option>
            </select>
            <input
              type="text"
              placeholder="Fecha"
              value={fieldData.fecha || ''}
              onChange={(e) => updateField(section, subsection, field, 'fecha', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Responsable"
              value={fieldData.responsable || ''}
              onChange={(e) => updateField(section, subsection, field, 'responsable', e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        )}
        
        <textarea
          placeholder="Observaciones"
          value={fieldData.observaciones || ''}
          onChange={(e) => updateField(section, subsection, field, 'observaciones', e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
          rows={2}
        />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Sistema de Verificación - Convocatoria 966 Colombia Inteligente
        </h1>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.porcentaje}%</div>
              <div className="text-sm text-gray-600">Completado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.completo}</div>
              <div className="text-sm text-gray-600">Completos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.pendiente}</div>
              <div className="text-sm text-gray-600">Pendientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Items</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={saveData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Save className="w-4 h-4" />
            Guardar
          </button>
          <button
            onClick={exportData}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
          >
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <label className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 cursor-pointer">
            <Upload className="w-4 h-4" />
            Importar
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
          </label>
          {lastSaved && (
            <div className="flex items-center gap-2 text-sm text-gray-600 ml-auto">
              <Calendar className="w-4 h-4" />
              Guardado: {lastSaved.toLocaleString()}
            </div>
          )}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${stats.porcentaje}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { key: 'generalInfo', label: 'Información General' },
              { key: 'documentosIES', label: 'Documentos IES' },
              { key: 'talentoHumano', label: 'Talento Humano' },
              { key: 'empresaNacional', label: 'Empresa Nacional' },
              { key: 'organizacionesLocales', label: 'Org. Locales' },
              { key: 'contenidoTecnico', label: 'Contenido Técnico' },
              { key: 'verificacion', label: 'Verificación Final' }
            ].map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  activeSection === section.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        {activeSection === 'generalInfo' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Información General del Proyecto</h2>
            <div className="grid gap-4">
              <StatusField section="generalInfo" field="titulo" label="Título del proyecto" />
              <StatusField section="generalInfo" field="entidadEjecutora" label="Entidad ejecutora (IES)" />
              <StatusField section="generalInfo" field="investigadorPrincipal" label="Investigador principal" />
              <StatusField section="generalInfo" field="empresaNacional" label="Empresa nacional aliada" />
              <StatusField section="generalInfo" field="organizacionesLocales" label="Organización(es) local(es)-regional(es)" />
            </div>
          </div>
        )}

        {activeSection === 'documentosIES' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Documentos Entidad Ejecutora (IES)</h2>
            <div className="grid gap-4">
              <StatusField section="documentosIES" field="anexo1" label="Anexo 1: Carta Unificada de Aval y Compromiso" />
              <StatusField section="documentosIES" field="anexo3" label="Anexo 3: Hoja de Vida del Investigador Principal" />
              <StatusField section="documentosIES" field="anexo6" label="Anexo 6: Contenido técnico de la propuesta" />
              <StatusField section="documentosIES" field="certificadoExistencia" label="Certificado de existencia y representación legal" />
              <StatusField section="documentosIES" field="categorizacionGrupo" label="Categorización grupo de investigación (A1, A, B, C)" />
              <StatusField section="documentosIES" field="evidenciaLineas" label="Evidencia líneas de investigación TIC/IA/Cuántica" />
              <StatusField section="documentosIES" field="avalEtica" label="Aval comité de ética/bioética" required={false} />
              <StatusField section="documentosIES" field="permisosAmbientales" label="Permisos/licencias ambientales" required={false} />
            </div>
          </div>
        )}

        {activeSection === 'talentoHumano' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Talento Humano</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Jóvenes Investigadores</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Joven Investigador 1</h4>
                    <div className="space-y-3">
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="anexo4" label="Anexo 4: Vinculación" />
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="cedula" label="Copia cédula" />
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="diploma" label="Diploma/certificado" />
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="certificadoNotas" label="Certificado notas (≥3.8)" />
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="cvlac" label="Registro CvLAC" />
                      <StatusField section="jovenesInvestigadores" subsection="joven1" field="verificacionEdad" label="Verificación edad (≤28 años)" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Joven Investigador 2</h4>
                    <div className="space-y-3">
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="anexo4" label="Anexo 4: Vinculación" />
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="cedula" label="Copia cédula" />
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="diploma" label="Diploma/certificado" />
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="certificadoNotas" label="Certificado notas (≥3.8)" />
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="cvlac" label="Registro CvLAC" />
                      <StatusField section="jovenesInvestigadores" subsection="joven2" field="verificacionEdad" label="Verificación edad (≤28 años)" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Doctor Estancia Posdoctoral</h3>
                <div className="space-y-3">
                  <StatusField section="doctorPosdoctoral" field="titulo" label="Copia título doctorado/certificación" />
                  <StatusField section="doctorPosdoctoral" field="cvlac" label="Registro CvLAC" />
                  <StatusField section="doctorPosdoctoral" field="verificacionVinculo" label="Verificación no vínculo laboral previo" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Estudiantes de Maestría</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Estudiante 1</h4>
                    <div className="space-y-3">
                      <StatusField section="estudiantesMaestria" subsection="estudiante1" field="certificacionMatricula" label="Certificación matrícula" />
                      <StatusField section="estudiantesMaestria" subsection="estudiante1" field="cvlac" label="Registro CvLAC" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Estudiante 2</h4>
                    <div className="space-y-3">
                      <StatusField section="estudiantesMaestria" subsection="estudiante2" field="certificacionMatricula" label="Certificación matrícula" />
                      <StatusField section="estudiantesMaestria" subsection="estudiante2" field="cvlac" label="Registro CvLAC" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Semillero de Investigación</h3>
                <div className="space-y-3">
                  <StatusField section="semillero" field="anexo5" label="Anexo 5: Vinculación Semilleros" />
                  <StatusField section="semillero" field="constitucion" label="Documento constitución semillero" />
                  <StatusField section="semillero" field="certificados" label="Certificados semestre estudiantes" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'empresaNacional' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Documentos Empresa Nacional</h2>
            <div className="space-y-3">
              <StatusField section="empresaNacionalDocs" field="certificadoExistencia" label="Certificado existencia y representación legal" />
              <StatusField section="empresaNacionalDocs" field="anexo2" label="Anexo 2: Carta experiencia empresa" />
              <StatusField section="empresaNacionalDocs" field="certificacionesProyectos" label="Certificaciones ejecución proyectos (mín. 3)" />
              <StatusField section="empresaNacionalDocs" field="firmaAnexo1" label="Firma Anexo 1 (Carta Unificada)" />
              <StatusField section="empresaNacionalDocs" field="verificacionAntiguedad" label="Verificación antigüedad (≥2 años)" />
            </div>
          </div>
        )}

        {activeSection === 'organizacionesLocales' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Organizaciones Locales-Regionales</h2>
            <div>
              <h3 className="text-lg font-medium mb-3">Organización 1 (Obligatoria)</h3>
              <div className="space-y-3">
                <StatusField section="organizacionesLocalesDocs" subsection="org1" field="certificadoCamara" label="Certificado Cámara de Comercio" />
                <StatusField section="organizacionesLocalesDocs" subsection="org1" field="certificacionConstitucion" label="Certificación constitución (≥1 año)" />
                <StatusField section="organizacionesLocalesDocs" subsection="org1" field="firmaAnexo1" label="Firma Anexo 1 (Carta Unificada)" />
                <StatusField section="organizacionesLocalesDocs" subsection="org1" field="documentosEspecificos" label="Documentos específicos según tipo" />
              </div>
              </div>
          </div>
        )}

        {activeSection === 'contenidoTecnico' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Contenido Técnico (Anexo 6)</h2>
            <div className="space-y-3">
              <StatusField section="contenidoTecnico" field="identificacion" label="Identificación entidades y proyecto" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="generalidades" label="Generalidades y antecedentes" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="componenteTecnico" label="Componente técnico proyecto I+D+i" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="componenteFormacion" label="Componente formación y fortalecimiento capacidades" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="componentePresupuestal" label="Componente presupuestal (según Anexo 7)" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="estrategiaApropiacion" label="Estrategia Apropiación Social Conocimiento" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="cronograma" label="Cronograma de actividades" type="desarrollo" />
              <StatusField section="contenidoTecnico" field="bibliografia" label="Bibliografía y referencias" type="desarrollo" />
            </div>
          </div>
        )}

        {activeSection === 'verificacion' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Verificación Final</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Verificación Técnica</h3>
                <div className="space-y-3">
                  <StatusField section="verificacionTecnica" field="coherenciaEjes" label="Coherencia con ejes temáticos convocatoria" />
                  <StatusField section="verificacionTecnica" field="objetivosEspecificos" label="Objetivos específicos claramente definidos" />
                  <StatusField section="verificacionTecnica" field="metodologia" label="Metodología detallada" />
                  <StatusField section="verificacionTecnica" field="resultadosEsperados" label="Resultados esperados cuantificables" />
                  <StatusField section="verificacionTecnica" field="impactoTerritorial" label="Impacto territorial identificado" />
                  <StatusField section="verificacionTecnica" field="apropiacionSocial" label="Apropiación social del conocimiento" />
                  <StatusField section="verificacionTecnica" field="cronogramaRealista" label="Cronograma realista (18 meses)" />
                  <StatusField section="verificacionTecnica" field="presupuestoJustificado" label="Presupuesto justificado" />
                  <StatusField section="verificacionTecnica" field="contrapartidaMinima" label="Contrapartida mínima 20%" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Checklist Final</h3>
                <div className="space-y-3">
                  <StatusField section="verificacionFinal" field="documentosCompletos" label="Todos los documentos obligatorios cargados" />
                  <StatusField section="verificacionFinal" field="firmasCompletas" label="Firmas requeridas completas" />
                  <StatusField section="verificacionFinal" field="vigenciasValidas" label="Vigencias documentales válidas" />
                  <StatusField section="verificacionFinal" field="consistenciaInfo" label="Consistencia información entre documentos" />
                  <StatusField section="verificacionFinal" field="propuestaTecnica" label="Propuesta técnica completa" />
                  <StatusField section="verificacionFinal" field="talentoHumano" label="Talento humano completo" />
                  <StatusField section="verificacionFinal" field="alianzaEstrategica" label="Alianza estratégica conformada correctamente" />
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-red-800 mb-2">Fechas Críticas</h3>
                <div className="text-sm text-red-700">
                  <p><strong>Cierre convocatoria:</strong> 16 de junio de 2025 - 4:00 PM</p>
                  <p><strong>Período revisión requisitos:</strong> 17-24 de junio de 2025</p>
                  <p><strong>Período subsanación:</strong> 25-27 de junio de 2025 - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          <strong>Nota:</strong> Este sistema guarda automáticamente los datos en el navegador. 
          Use "Exportar" para crear respaldos y "Importar" para cargar datos previamente guardados.
        </p>
      </div>
    </div>
  );
};

function App() {
  return <ChecklistConvocatoria966 />;
}

export default App;