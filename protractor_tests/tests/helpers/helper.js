var Helper = {
    
    checkAttributeOfElementContainsValue: function(elem, attr_name, value) {
        elem.getAttribute(attr_name).then(function(attr) {
            expect(attr).toContain(value);
        });
        
    }
};

module.exports = Helper;