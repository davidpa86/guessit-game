var locales = {
  'configuration' : {
    'es' : 'Configuración',
    'en' : 'Configuration'
  },
  'teams' : {
    'es' : 'Número de equipos:',
    'en' : 'Number of teams:'
  },
  'rounds' : {
    'es' : 'Número de rondas:',
    'en' : 'Number of rounds:'
  },
  'new' : {
    'es' : 'Nueva Partida',
    'en' : 'New Game'
  },
  'characters' : {
    'es' : 'Número de personajes:',
    'en' : 'Number of characters:'
  },
  'round' : {
    'es' : 'Ronda',
    'en' : 'Round'
  },
  'character' : {
    'es' : 'Personaje',
    'en' : 'Character'
  },
  'turn' : {
    'es' : 'Turno de %TEAM%',
    'en' : 'Turn of %TEAM%'
  },
  'done' : {
    'es' : 'Hecho',
    'en' : 'Done'
  },
  'next' : {
    'es' : 'Siguiente',
    'en' : 'Next'
  },
  'team' : {
    'es' : 'Equipo',
    'en' : 'Team'
  },
  'points' : {
    'es' : 'Puntos',
    'en' : 'Points'
  },
  'start' : {
    'es' : 'Empezar',
    'en' : 'Start'
  },
  'timeout' : {
    'es' : '¡Tiempo!',
    'en' : 'Timeout!'
  },
  'textPlaceHolder' : {
    'es' : 'Escribe un presonaje...',
    'en' : 'Add a character...'
  },
  'result' : {
    'es' : 'Resultado final',
    'en' : 'Final result'
  }
};

function getLocale(string,language)
{
  language = language || "en";
  if (locales[string] && locales[string][language])
  {
    return locales[string][language];
  }
  return '';
}

module.exports = getLocale;
