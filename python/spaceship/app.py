from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse

from spaceship.config import Settings
from spaceship.routers import api, health

# App factory: створює FastAPI-додаток з налаштуваннями
def make_app(settings: Settings) -> FastAPI:
    # Ініціалізація FastAPI-додатку з метаданими з конфігурації
    app = FastAPI(
        debug=settings.debug,
        title=settings.app_title,
        description=settings.app_description,
        version=settings.app_version,
    )
    app.state.settings = settings

    if settings.debug:
        app.mount('/static', StaticFiles(directory='build'), name='static')

    app.include_router(api.router, prefix='/api', tags=['api'])
    app.include_router(health.router, prefix='/health', tags=['health'])

    # Головна сторінка 
    @app.get('/', include_in_schema=False, response_class=FileResponse)
    async def root() -> str:
        return 'build/index.html'

    return app
