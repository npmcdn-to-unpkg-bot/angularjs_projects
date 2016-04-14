'use strict';

describe('Service: cbSingleViewService', function() {

    beforeEach(module('cookingBook.singleView'));

    var cbSingleViewService,
        $rootScope;

    // Initialize factory
    beforeEach(inject(function(_cbSingleViewService_, _$rootScope_) {
        $rootScope = _$rootScope_;
        cbSingleViewService = _cbSingleViewService_;
    }));

    it('Should have a service', function () {
        expect(cbSingleViewService).not.toEqual(null);
    });

    describe('Get findRecipe call', function() {

        it('Should have findRecipe function', function () {
            expect(cbSingleViewService.findRecipe).toBeDefined();
        });

        it('Should have call to return specific receipt by ID', function () {
            var repeiptId = 1;
            var mockInitData = [
                {id: 1, name: "Galette", description: "some description", ingredients: [{"ingredientName":"butter", "amount":"100", "amountUnits":"g" }, {"ingredientName":"suggar", "amount":"100", "amountUnits":"g"}]},
                {id: 2, name: "Cheddar Chicken", description: "Preheat oven to 350 degrees F (175 degrees C).", ingredients: [{"ingredientName":"crushed cornflakes cereal", "amount":"1", "amountUnits":"cup" },{"ingredientName":"parmesan", "amount":"3/4", "amountUnits":"cup" }]},
                {id: 3, name: "Cheesecake", description: "Preheat oven to 350 degrees F (175 degrees C).", ingredients: [{"ingredientName":"eggs", "amount":"2", "amountUnits":"" },{"ingredientName":"suggar", "amount":"1/2", "amountUnits":"cup" }]},
                {id: 4, name: "Cupcake", description: "Combine sour cream and sugar; mix well. Stir in coconut. Fold in whipped topping. Spread top and sides of two 9-inch cake layers.", ingredients: [{"ingredientName":"cream", "amount":"2", "amountUnits":"cups" }]}
            ];

            spyOn(cbSingleViewService, 'findRecipe').and.callThrough();
            cbSingleViewService.findRecipe(repeiptId, mockInitData);
            expect(cbSingleViewService.findRecipe).toHaveBeenCalledWith(repeiptId, mockInitData);

            $rootScope.$apply();

            expect(typeof cbSingleViewService.receiptFound).toBe('object');

            expect(cbSingleViewService.receiptFound.id).toBeDefined();
            expect(cbSingleViewService.receiptFound.id).toEqual(repeiptId);

            expect(cbSingleViewService.receiptFound.name).toBeDefined();
            expect(cbSingleViewService.receiptFound.name).toEqual("Galette");

        });
    });
});