"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_dto_1 = require("dto/note.dto");
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
const valid_object_id_pipe_1 = require("../pipes/valid-object-id.pipe");
const empty_object_pipe_1 = require("pipes/empty-object.pipe");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesService.remove(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.notesService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesService.findById(id);
        });
    }
    update(id, updateNoteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesService.update(id, updateNoteDto);
        });
    }
    create(CreateNoteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesService.create(CreateNoteDto);
        });
    }
};
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "remove", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "findById", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id', new valid_object_id_pipe_1.ObjectIdPipe())),
    __param(1, common_1.Body(new empty_object_pipe_1.EmptyObjectPipe(), new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "update", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "create", null);
NotesController = __decorate([
    common_1.Controller('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map